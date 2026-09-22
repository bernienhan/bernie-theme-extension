import { ThemePalette } from '../types.js';

/**
 * Bernie Midnight Palette
 * Phong cách: Nền đen tuyền AMOLED/OLED (#000000 / #080808), màu sắc neon nổi bật cực kỳ sắc nét.
 */
export const bernieMidnightPalette: ThemePalette = {
  bg: {
    base: '#000000',          // Đen thuần OLED
    surface: '#09090b',       // Nền sidebar rất tối
    surfaceHover: '#18181b',  // Hover
    surfaceActive: '#27272a', // Active
    overlay: '#121215',       // Nền popup
    highlight: '#0d0d10',     // Highlight line
  },

  fg: {
    primary: '#fafafa',       // Trắng tinh
    secondary: '#a1a1aa',     // Xám trung tính
    muted: '#52525b',         // Xám tối
    inverse: '#000000',       // Chữ tương phản
  },

  border: {
    subtle: '#27272a',        // Viền mỏng
    focus: '#a855f7',         // Viền focus Neon Purple
  },

  accent: {
    primary: '#a855f7',       // Tím Neon Purple
    secondary: '#06b6d4',     // Xanh Neon Cyan
    selection: '#a855f740',   // Selection vùng bôi đen
    matchHighlight: '#06b6d450',
  },

  status: {
    error: '#ff4d6d',
    warning: '#facc15',
    info: '#06b6d4',
    success: '#10b981',
  },

  git: {
    added: '#10b981',
    modified: '#06b6d4',
    deleted: '#ff4d6d',
    untracked: '#c084fc',
    ignored: '#3f3f46',
  },

  syntax: {
    keyword: '#ff4d6d',       // Neon Crimson
    storage: '#f43f5e',       // Rose
    func: '#06b6d4',          // Neon Cyan
    variable: '#f4f4f5',      // Bright White
    parameter: '#fb923c',     // Neon Orange
    property: '#38bdf8',      // Sky Blue
    string: '#4ade80',        // Neon Lime Green
    number: '#facc15',        // Neon Yellow
    type: '#c084fc',          // Neon Violet
    comment: '#52525b',       // Muted Dark Gray
    tag: '#ff4d6d',           // Neon Red
    attribute: '#fb923c',     // Neon Orange
    operator: '#e4e4e7',      // White gray
    punctuation: '#71717a',   // Gray
    regexp: '#ec4899',        // Pink
    special: '#e879f9',       // Fuchsia
  },
};
