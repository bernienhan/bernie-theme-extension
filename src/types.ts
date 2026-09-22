export type ThemeType = 'vs-dark' | 'vs' | 'hc-black';

export interface ThemePalette {
  // --- Backgrounds & Surfaces ---
  bg: {
    base: string;          // Main background (editor)
    surface: string;       // Secondary background (sidebar, panel)
    surfaceHover: string;  // Hover state for lists/items
    surfaceActive: string; // Active/Selected item background
    overlay: string;       // Modals, QuickPick, Dialogs
    highlight: string;     // Line highlight, subtle badges
  };

  // --- Foregrounds & Text ---
  fg: {
    primary: string;       // Main text
    secondary: string;     // Dimmed/secondary text
    muted: string;         // Comments, inactive text, breadcrumbs
    inverse: string;       // Text on bright accents (buttons, badges)
  };

  // --- Borders & Separators ---
  border: {
    subtle: string;        // Inset borders, separators
    focus: string;         // Focused input/widget outline
  };

  // --- Brand & Accent Colors ---
  accent: {
    primary: string;       // Main focus color (buttons, active indicator, cursor)
    secondary: string;     // Secondary accent color
    selection: string;     // Text selection background
    matchHighlight: string;// Find match highlight
  };

  // --- Status & Diagnostic Colors ---
  status: {
    error: string;         // Red
    warning: string;       // Orange / Yellow
    info: string;          // Cyan / Blue
    success: string;       // Green
  };

  // --- Git Status Colors ---
  git: {
    added: string;
    modified: string;
    deleted: string;
    untracked: string;
    ignored: string;
  };

  // --- Syntax Token Colors ---
  syntax: {
    keyword: string;       // const, let, if, return, import
    storage: string;       // function, class, type, interface
    func: string;          // function & method names, calls
    variable: string;      // variable names, identifiers
    parameter: string;     // function arguments / parameters
    property: string;      // object keys, struct properties
    string: string;        // "strings", template literals
    number: string;        // numbers, booleans, constants
    type: string;          // Type names, Classes, Interfaces
    comment: string;       // // comments, docstrings
    tag: string;           // HTML/JSX tags (div, App)
    attribute: string;     // HTML/JSX attributes (class, id)
    operator: string;      // +, -, =, =>, &&
    punctuation: string;   // {}, [], (), ;, ,
    regexp: string;        // regular expressions
    special: string;       // this, super, self
  };
}

export interface ThemeDefinition {
  id: string;              // e.g. 'bernie-dark'
  label: string;           // e.g. 'Bernie Dark'
  uiTheme: ThemeType;      // 'vs-dark' | 'vs' | 'hc-black'
  palette: ThemePalette;
}

export interface VSCodeThemeJSON {
  $schema: string;
  name: string;
  type: 'dark' | 'light' | 'hc';
  semanticHighlighting: boolean;
  semanticTokenColors?: Record<string, string | { foreground?: string; fontStyle?: string; italic?: boolean; bold?: boolean }>;
  colors: Record<string, string>;
  tokenColors: Array<{
    name?: string;
    scope: string | string[];
    settings: {
      foreground?: string;
      fontStyle?: string;
    };
  }>;
}
