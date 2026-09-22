import { ThemePalette } from '../types.js';

/**
 * Bernie Midnight Palette (Pure OLED & Warm Gold/Peach)
 * Phong cách: Nền đen thuần AMOLED (#000000), loại bỏ xanh lá chói,
 * sử dụng cặp màu Champagne Gold, Soft Cyan và Lavender cực sang.
 */
export const bernieMidnightPalette: ThemePalette = {
  bg: {
    base: '#000000',          // Đen thuần OLED
    surface: '#09090b',       // Nền sidebar rất tối
    surfaceHover: '#18181b',  // Hover
    surfaceActive: '#27272a', // Active
    overlay: '#121215',       // Nền popup
    highlight: '#0f0f13',     // Highlight line
  },

  fg: {
    primary: '#f4f4f5',       // Trắng bạc
    secondary: '#a1a1aa',     // Xám trung tính
    muted: '#52525b',         // Xám tối dịu
    inverse: '#000000',       // Chữ tương phản
  },

  border: {
    subtle: '#27272a',        // Viền mỏng
    focus: '#38bdf8',         // Viền focus Sky Blue
  },

  accent: {
    primary: '#38bdf8',       // Sky Blue
    secondary: '#c084fc',     // Lavender Violet
    selection: '#38bdf835',   // Bôi đen văn bản
    matchHighlight: '#38bdf850',
  },

  status: {
    error: '#fb7185',         // Rose đỏ dịu
    warning: '#fbbf24',       // Amber
    info: '#38bdf8',          // Sky Blue
    success: '#5eead4',       // Muted Seafoam Mint (không chói)
  },

  git: {
    added: '#5eead4',
    modified: '#38bdf8',
    deleted: '#fb7185',
    untracked: '#c084fc',
    ignored: '#3f3f46',
  },

  syntax: {
    keyword: '#fb7185',       // Rose Soft Red
    storage: '#f472b6',       // Pastel Pink
    func: '#38bdf8',          // Ice Blue
    variable: '#f4f4f5',      // Bright White
    parameter: '#fb923c',     // Warm Peach
    property: '#67e8f9',      // Soft Cyan
    string: '#fde047',        // Champagne / Soft Warm Gold (không dùng xanh lá chói)
    number: '#fb923c',        // Orange Amber
    type: '#c084fc',          // Lavender Purple
    comment: '#6b7280',       // Slate Gray
    tag: '#fb7185',           // Rose Red
    attribute: '#fb923c',     // Peach
    operator: '#e4e4e7',      // Silver Gray
    punctuation: '#71717a',   // Gray
    regexp: '#f472b6',        // Pink
    special: '#e879f9',       // Fuchsia
  },
};
