import { ThemeDefinition, VSCodeThemeJSON } from '../types.js';
import { createWorkbenchColors } from './workbench.js';
import { createTokenColors, createSemanticTokenColors } from './syntax.js';

export function generateTheme(definition: ThemeDefinition): VSCodeThemeJSON {
  const { label, uiTheme, palette } = definition;

  let themeType: 'dark' | 'light' | 'hc' = 'dark';
  if (uiTheme === 'vs') {
    themeType = 'light';
  } else if (uiTheme === 'hc-black') {
    themeType = 'hc';
  }

  return {
    $schema: 'vscode://schemas/color-theme',
    name: label,
    type: themeType,
    semanticHighlighting: true,
    semanticTokenColors: createSemanticTokenColors(palette),
    colors: createWorkbenchColors(palette),
    tokenColors: createTokenColors(palette),
  };
}
