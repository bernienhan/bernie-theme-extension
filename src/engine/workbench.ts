import { colord } from 'colord';
import { ThemePalette } from '../types.js';

export function createWorkbenchColors(p: ThemePalette): Record<string, string> {
  const alpha = (color: string, opacity: number) => colord(color).alpha(opacity).toHex();

  return {
    // Base Colors
    focusBorder: p.border.focus,
    foreground: p.fg.primary,
    disabledForeground: p.fg.muted,
    'selection.background': p.accent.selection,
    'descriptionForeground': p.fg.secondary,
    'errorForeground': p.status.error,
    'icon.foreground': p.fg.secondary,

    // Window & Title Bar
    'titleBar.activeBackground': p.bg.surface,
    'titleBar.activeForeground': p.fg.primary,
    'titleBar.inactiveBackground': p.bg.surface,
    'titleBar.inactiveForeground': p.fg.muted,
    'titleBar.border': p.border.subtle,

    // Activity Bar
    'activityBar.background': p.bg.surface,
    'activityBar.foreground': p.accent.primary,
    'activityBar.inactiveForeground': p.fg.muted,
    'activityBar.border': p.border.subtle,
    'activityBarBadge.background': p.accent.primary,
    'activityBarBadge.foreground': p.fg.inverse,

    // Side Bar
    'sideBar.background': p.bg.surface,
    'sideBar.foreground': p.fg.secondary,
    'sideBar.border': p.border.subtle,
    'sideBarTitle.foreground': p.fg.primary,
    'sideBarSectionHeader.background': p.bg.surface,
    'sideBarSectionHeader.foreground': p.fg.primary,
    'sideBarSectionHeader.border': p.border.subtle,

    // Lists & Trees (Explorer, outline, etc.)
    'list.activeSelectionBackground': p.bg.surfaceActive,
    'list.activeSelectionForeground': p.fg.primary,
    'list.inactiveSelectionBackground': alpha(p.bg.surfaceActive, 0.6),
    'list.inactiveSelectionForeground': p.fg.primary,
    'list.hoverBackground': p.bg.surfaceHover,
    'list.hoverForeground': p.fg.primary,
    'list.focusBackground': p.bg.surfaceActive,
    'list.focusForeground': p.fg.primary,
    'list.highlightForeground': p.accent.primary,
    'list.dropBackground': alpha(p.accent.primary, 0.2),

    // Editor Group & Tabs
    'editorGroup.border': p.border.subtle,
    'editorGroupHeader.tabsBackground': p.bg.surface,
    'editorGroupHeader.noTabsBackground': p.bg.base,
    'tab.activeBackground': p.bg.base,
    'tab.activeForeground': p.fg.primary,
    'tab.activeBorder': p.bg.base,
    'tab.activeBorderTop': p.accent.primary,
    'tab.inactiveBackground': p.bg.surface,
    'tab.inactiveForeground': p.fg.muted,
    'tab.border': p.border.subtle,
    'tab.hoverBackground': p.bg.base,
    'tab.hoverForeground': p.fg.primary,
    'tab.unfocusedActiveBorderTop': alpha(p.accent.primary, 0.5),

    // Editor Main
    'editor.background': p.bg.base,
    'editor.foreground': p.fg.primary,
    'editorLineNumber.foreground': p.fg.muted,
    'editorLineNumber.activeForeground': p.accent.primary,
    'editorCursor.foreground': p.accent.primary,
    'editor.selectionBackground': p.accent.selection,
    'editor.selectionHighlightBackground': alpha(p.accent.selection, 0.6),
    'editor.wordHighlightBackground': alpha(p.accent.primary, 0.15),
    'editor.wordHighlightStrongBackground': alpha(p.accent.primary, 0.25),
    'editor.findMatchBackground': p.accent.matchHighlight,
    'editor.findMatchHighlightBackground': alpha(p.accent.matchHighlight, 0.5),
    'editor.lineHighlightBackground': p.bg.highlight,
    'editor.lineHighlightBorder': alpha(p.bg.highlight, 0),
    'editorWhitespace.foreground': alpha(p.fg.muted, 0.3),
    'editorIndentGuide.background1': alpha(p.border.subtle, 0.6),
    'editorIndentGuide.activeBackground1': p.accent.primary,
    'editorRuler.foreground': p.border.subtle,
    'editorCodeLens.foreground': p.fg.muted,
    'editorBracketMatch.background': alpha(p.accent.primary, 0.2),
    'editorBracketMatch.border': p.accent.primary,

    // Overview Ruler (Scrollbar diagnostics)
    'editorOverviewRuler.border': alpha(p.border.subtle, 0),
    'editorOverviewRuler.findMatchForeground': p.accent.matchHighlight,
    'editorOverviewRuler.errorForeground': p.status.error,
    'editorOverviewRuler.warningForeground': p.status.warning,
    'editorOverviewRuler.infoForeground': p.status.info,

    // Editor Widgets (Autocomplete, hover, find dialog)
    'editorWidget.background': p.bg.overlay,
    'editorWidget.foreground': p.fg.primary,
    'editorWidget.border': p.border.focus,
    'editorHoverWidget.background': p.bg.overlay,
    'editorHoverWidget.border': p.border.subtle,
    'editorSuggestWidget.background': p.bg.overlay,
    'editorSuggestWidget.border': p.border.subtle,
    'editorSuggestWidget.foreground': p.fg.primary,
    'editorSuggestWidget.highlightForeground': p.accent.primary,
    'editorSuggestWidget.selectedBackground': p.bg.surfaceActive,

    // Status Bar
    'statusBar.background': p.bg.surface,
    'statusBar.foreground': p.fg.secondary,
    'statusBar.border': p.border.subtle,
    'statusBar.debuggingBackground': p.accent.secondary,
    'statusBar.debuggingForeground': p.fg.inverse,
    'statusBar.noFolderBackground': p.bg.surface,
    'statusBarItem.hoverBackground': p.bg.surfaceHover,
    'statusBarItem.activeBackground': p.bg.surfaceActive,
    'statusBarItem.prominentBackground': p.accent.primary,
    'statusBarItem.prominentForeground': p.fg.inverse,

    // Panels (Output, Terminal, Problems, Debug Console)
    'panel.background': p.bg.surface,
    'panel.border': p.border.subtle,
    'panelTitle.activeForeground': p.fg.primary,
    'panelTitle.activeBorder': p.accent.primary,
    'panelTitle.inactiveForeground': p.fg.muted,

    // Terminal Colors
    'terminal.background': p.bg.surface,
    'terminal.foreground': p.fg.primary,
    'terminal.ansiBlack': p.bg.base,
    'terminal.ansiRed': p.status.error,
    'terminal.ansiGreen': p.status.success,
    'terminal.ansiYellow': p.status.warning,
    'terminal.ansiBlue': p.status.info,
    'terminal.ansiMagenta': p.accent.secondary,
    'terminal.ansiCyan': p.syntax.special,
    'terminal.ansiWhite': p.fg.primary,
    'terminal.ansiBrightBlack': p.fg.muted,
    'terminal.ansiBrightRed': p.status.error,
    'terminal.ansiBrightGreen': p.status.success,
    'terminal.ansiBrightYellow': p.status.warning,
    'terminal.ansiBrightBlue': p.status.info,
    'terminal.ansiBrightMagenta': p.accent.secondary,
    'terminal.ansiBrightCyan': p.syntax.special,
    'terminal.ansiBrightWhite': '#ffffff',

    // Buttons
    'button.background': p.accent.primary,
    'button.foreground': p.fg.inverse,
    'button.hoverBackground': alpha(p.accent.primary, 0.85),
    'button.secondaryBackground': p.bg.surfaceHover,
    'button.secondaryForeground': p.fg.primary,
    'button.secondaryHoverBackground': p.bg.surfaceActive,

    // Input Controls & Dropdowns
    'input.background': p.bg.base,
    'input.foreground': p.fg.primary,
    'input.border': p.border.subtle,
    'input.placeholderForeground': p.fg.muted,
    'inputOption.activeBorder': p.accent.primary,
    'inputValidation.errorBackground': alpha(p.status.error, 0.2),
    'inputValidation.errorBorder': p.status.error,
    'inputValidation.warningBackground': alpha(p.status.warning, 0.2),
    'inputValidation.warningBorder': p.status.warning,
    'inputValidation.infoBackground': alpha(p.status.info, 0.2),
    'inputValidation.infoBorder': p.status.info,
    'dropdown.background': p.bg.base,
    'dropdown.foreground': p.fg.primary,
    'dropdown.border': p.border.subtle,

    // Breadcrumbs
    'breadcrumb.foreground': p.fg.muted,
    'breadcrumb.focusForeground': p.fg.primary,
    'breadcrumb.activeSelectionForeground': p.accent.primary,
    'breadcrumb.background': p.bg.base,

    // Git Decorations
    'gitDecoration.addedResourceForeground': p.git.added,
    'gitDecoration.modifiedResourceForeground': p.git.modified,
    'gitDecoration.deletedResourceForeground': p.git.deleted,
    'gitDecoration.untrackedResourceForeground': p.git.untracked,
    'gitDecoration.ignoredResourceForeground': p.git.ignored,
    'gitDecoration.conflictingResourceForeground': p.status.error,
    'gitDecoration.submoduleResourceForeground': p.fg.muted,

    // Badge & Scrollbar
    'badge.background': p.accent.primary,
    'badge.foreground': p.fg.inverse,
    'scrollbar.shadow': alpha('#000000', 0.2),
    'scrollbarSlider.background': alpha(p.fg.muted, 0.2),
    'scrollbarSlider.hoverBackground': alpha(p.fg.muted, 0.35),
    'scrollbarSlider.activeBackground': alpha(p.fg.muted, 0.5),

    // Notifications & Quick Pick
    'notificationCenterHeader.background': p.bg.overlay,
    'notifications.background': p.bg.overlay,
    'notifications.border': p.border.subtle,
    'quickInput.background': p.bg.overlay,
    'quickInput.foreground': p.fg.primary,
    'pickerGroup.border': p.border.subtle,
    'pickerGroup.foreground': p.accent.primary,
  };
}
