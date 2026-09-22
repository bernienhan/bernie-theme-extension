import * as vscode from 'vscode';
import { generateWarmLightPalette } from './engine/warmth.js';
import { createWorkbenchColors } from './engine/workbench.js';
import { createTokenColors } from './engine/syntax.js';
import { getWarmthSliderHtml } from './webview/sliderWebview.js';

let currentPanel: vscode.WebviewPanel | undefined = undefined;
let statusBarItem: vscode.StatusBarItem | undefined = undefined;

export function activate(context: vscode.ExtensionContext) {
  // 1. Tạo Status Bar Item góc dưới
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = 'bernieTheme.openWarmthSlider';
  context.subscriptions.push(statusBarItem);

  const initialWarmth = getSavedWarmth();
  updateStatusBar(initialWarmth);

  // Lắng nghe đổi theme để ẩn/hiện status bar
  checkThemeAndToggleStatusBar();
  vscode.window.onDidChangeActiveColorTheme(() => {
    checkThemeAndToggleStatusBar();
  }, null, context.subscriptions);

  // 2. Đăng ký Command mở Slider
  const openSliderCommand = vscode.commands.registerCommand('bernieTheme.openWarmthSlider', () => {
    const currentWarmth = getSavedWarmth();

    if (currentPanel) {
      currentPanel.reveal(vscode.ViewColumn.Beside);
      return;
    }

    currentPanel = vscode.window.createWebviewPanel(
      'bernieWarmthSlider',
      'Bernie Warmth Customizer',
      vscode.ViewColumn.Beside,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      }
    );

    currentPanel.webview.html = getWarmthSliderHtml(currentWarmth);

    // Lắng nghe sự kiện kéo chuột realtime từ Webview
    currentPanel.webview.onDidReceiveMessage(async (message) => {
      if (message.command === 'setWarmth') {
        const warmth = Number(message.value);
        await applyWarmthRealtime(warmth);
        updateStatusBar(warmth);
      }
    }, undefined, context.subscriptions);

    currentPanel.onDidDispose(() => {
      currentPanel = undefined;
    }, null, context.subscriptions);
  });

  // 3. Đăng ký Command Reset
  const resetCommand = vscode.commands.registerCommand('bernieTheme.resetWarmth', async () => {
    await applyWarmthRealtime(30);
    updateStatusBar(30);
    vscode.window.showInformationMessage('Bernie Light Theme warmth reset to default (30%).');
  });

  context.subscriptions.push(openSliderCommand, resetCommand);
}

function getSavedWarmth(): number {
  const config = vscode.workspace.getConfiguration('bernieTheme');
  return config.get<number>('lightWarmth', 30);
}

function updateStatusBar(warmth: number) {
  if (statusBarItem) {
    statusBarItem.text = `Warmth: ${warmth}%`;
    statusBarItem.tooltip = 'Click to drag & adjust Bernie Light Warmth Slider in Realtime';
  }
}

function checkThemeAndToggleStatusBar() {
  const currentTheme = vscode.window.activeColorTheme.kind;
  const workbenchConfig = vscode.workspace.getConfiguration('workbench');
  const colorTheme = workbenchConfig.get<string>('colorTheme', '');

  if (colorTheme.includes('Bernie Light')) {
    statusBarItem?.show();
  } else {
    // Vẫn hiện nếu user muốn mở customizer bất cứ lúc nào
    statusBarItem?.show();
  }
}

async function applyWarmthRealtime(warmth: number) {
  const palette = generateWarmLightPalette(warmth);
  const workbenchColors = createWorkbenchColors(palette);
  const tokenColors = createTokenColors(palette);

  const themeTarget = '[Bernie Light (Paper Clean)]';

  const workbenchConfig = vscode.workspace.getConfiguration('workbench');
  const existingColors = workbenchConfig.get<Record<string, any>>('colorCustomizations') || {};

  const updatedColors = {
    ...existingColors,
    [themeTarget]: workbenchColors,
  };

  await workbenchConfig.update('colorCustomizations', updatedColors, vscode.ConfigurationTarget.Global);

  const editorConfig = vscode.workspace.getConfiguration('editor');
  const existingTokenCustomizations = editorConfig.get<Record<string, any>>('tokenColorCustomizations') || {};

  const updatedTokenCustomizations = {
    ...existingTokenCustomizations,
    [themeTarget]: {
      textMateRules: tokenColors,
    },
  };

  await editorConfig.update('tokenColorCustomizations', updatedTokenCustomizations, vscode.ConfigurationTarget.Global);

  // Lưu setting
  const bernieConfig = vscode.workspace.getConfiguration('bernieTheme');
  await bernieConfig.update('lightWarmth', warmth, vscode.ConfigurationTarget.Global);
}

export function deactivate() {
  if (statusBarItem) {
    statusBarItem.dispose();
  }
}
