<div align="center">

# ✦ Bernie Themes for VS Code ✦

**A refined collection of high-contrast, eye-care, and aesthetically crafted themes for Visual Studio Code.**

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?style=flat-square)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![VS Code Engine](https://img.shields.io/badge/vscode-%3E%3D1.80.0-007ACC.svg?style=flat-square&logo=visualstudiocode)](https://code.visualstudio.com/)
[![Built with TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-3178C6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

[Features](#-key-features) • [Themes Gallery](#-themes-gallery) • [Installation](#-installation) • [Recommended Settings](#-recommended-editor-settings) • [Theme Engine](#-extending--customizing)

---

</div>

## 🌟 Overview

**Bernie Themes** is designed from the ground up for developers who demand both **high contrast readability** and **long-session visual comfort**. 

Unlike conventional themes that rely on aggressive neon greens and washed-out text, Bernie Themes employs a curated, harmonious color science:
- **Zero Harsh Greens**: Replaced with soothing **Warm Honey**, **Sand**, and **Auburn** tones to eliminate eye glare.
- **Rich Semantic Highlighting**: Deeply integrated with modern Language Server Protocols (LSP) for TypeScript, Python, Rust, Go, C++, and more.
- **Punchy Typography**: Crisp contrast with selective bold styling for methods, variables, keywords, and types.

---

## 🎨 Themes Gallery

| Theme | Description | Ideal For |
| :--- | :--- | :--- |
| **Bernie Dark (Eye Care)** | Deep slate/navy background with soothing warm tones and soft coral accents. | Daily all-around coding without eye fatigue. |
| **Bernie Rose (Sakura Blossom)** | Luxurious dark plum backdrop enriched with soft cherry blossom pinks and rose gold. | Aesthetic, cozy, and vibrant night sessions. |
| **Bernie Light (Paper Clean)** | Ultra-crisp paper white canvas featuring bold midnight ink typography and high-contrast accents. | Daytime productivity and brightly lit rooms. |
| **Bernie Velvet (Soft Pastel)** | Smoky graphite surface with relaxing, muted pastel hues (Catppuccin / Rosé Pine inspired). | Late-night deep-focus sessions. |
| **Bernie Midnight (OLED Gold)** | True AMOLED pure black (`#000000`) paired with champagne gold and sky blue accents. | OLED / Mini-LED displays and battery saving. |

---

## ✨ Key Features

- 👁️ **Eye-Care Color Harmony**: Carefully balanced contrast ratios that comply with readability standards while minimizing blue-light strain.
- ⚡ **Distinct Syntax Hierarchy**: Every token—from function parameters to object properties—has a purposeful, distinguishable color.
- 🖋️ **Bold & Crisp Font Accents**: Method declarations, variables, and keywords pop out instantly for rapid code scanning.
- 🧱 **Scalable Multi-Theme Architecture**: Built upon a modular TypeScript Token Engine, allowing seamless addition of custom color palettes.

---

## 📦 Installation

### Option 1: Install from VSIX (Personal / Offline)

1. Download or package the `.vsix` file:
   ```bash
   npm run package
   ```
2. In VS Code:
   - Open the **Extensions** view (`Ctrl + Shift + X` or `Cmd + Shift + X`).
   - Click the **`...`** (Views and More Actions) menu in the top-right corner.
   - Select **Install from VSIX...** and choose `bernie-theme-0.0.1.vsix`.

### Option 2: Command Line (CLI)

```bash
code --install-extension bernie-theme-0.0.1.vsix
```

---

## 🚀 How to Activate

1. Open the Command Palette via `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS).
2. Type **`Preferences: Color Theme`** (or use shortcut `Ctrl + K Ctrl + T`).
3. Select any of the **Bernie** themes from the list:
   - `Bernie Dark (Eye Care)`
   - `Bernie Rose (Sakura Blossom)`
   - `Bernie Light (Paper Clean)`
   - `Bernie Velvet (Soft Pastel)`
   - `Bernie Midnight (OLED Gold)`

---

## ⚙️ Recommended Editor Settings

To achieve the best visual experience, add the following to your `settings.json`:

```json
{
  // Enable full semantic highlighting support
  "editor.semanticHighlighting.enabled": true,

  // Smooth cursor animation and line transitions
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.smoothScrolling": true,

  // Bracket pair colorization & guides
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",

  // Recommended typography
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6
}
```

---

## 🛠️ Extending & Customizing

Bernie Themes is powered by an extensible TypeScript build system. You can easily add your own color variant in 3 simple steps:

1. **Create a Palette**:
   Duplicate `src/palettes/template.ts` to `src/palettes/my-custom-theme.ts` and customize your hex values.

2. **Register the Theme** in `src/themes.ts`:
   ```typescript
   import { myCustomPalette } from './palettes/my-custom-theme.js';

   export const themes: ThemeDefinition[] = [
     // ... existing themes
     {
       id: 'my-custom-theme',
       label: 'Bernie Custom',
       uiTheme: 'vs-dark', // or 'vs' for light themes
       palette: myCustomPalette,
     },
   ];
   ```

3. **Build the Theme**:
   ```bash
   npm run build
   ```
   *The JSON file and `package.json` configurations are generated automatically.*

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Crafted with care by **Bernie**. Enjoy coding! 🚀

</div>
