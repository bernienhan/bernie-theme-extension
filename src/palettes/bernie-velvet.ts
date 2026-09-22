import { ThemePalette } from '../types.js';

/**
 * Bernie Velvet Palette (Ultra Eye-Care & Soft Contrast)
 * Phong cách: Nền tím khói / than chì cực sâu (#16161e), màu chữ pastel ấm áp,
 * tối ưu tuyệt đối cho người làm việc ban đêm hoặc nhìn màn hình lâu, không có màu chói.
 */
export const bernieVelvetPalette: ThemePalette = {
  bg: {
    base: '#14141d',          // Nền than chì tím khói
    surface: '#0f0f16',       // Nền sidebar
    surfaceHover: '#1d1d2b',  // Hover
    surfaceActive: '#262638', // Active
    overlay: '#1a1a26',       // Popup
    highlight: '#1c1c28',     // Line highlight
  },

  fg: {
    primary: '#dcdfe7',       // Trắng xám khói rất êm mắt
    secondary: '#9da3b4',     // Chữ phụ
    muted: '#62687c',         // Chữ mờ
    inverse: '#0f0f16',       // Chữ tương phản
  },

  border: {
    subtle: '#222332',        // Viền tinh tế
    focus: '#9d7cd8',         // Viền tím Pastel
  },

  accent: {
    primary: '#9d7cd8',       // Tím pastel êm ái
    secondary: '#7dcfff',     // Xanh băng nhạt
    selection: '#3b345980',   // Bôi đen dịu
    matchHighlight: '#9d7cd840',
  },

  status: {
    error: '#e06c75',         // Đỏ hồng phấn dịu
    warning: '#e5c07b',       // Vàng cát ấm
    info: '#7dcfff',          // Xanh băng
    success: '#8ebd6b',       // Xanh rêu phấn nhẹ
  },

  git: {
    added: '#8ebd6b',
    modified: '#7dcfff',
    deleted: '#e06c75',
    untracked: '#bb9af7',
    ignored: '#4c5163',
  },

  syntax: {
    keyword: '#f38ba8',       // Hồng phấn Pastel (Catppuccin style)
    storage: '#cba6f7',       // Tím hoa cà
    func: '#89b4fa',          // Xanh dương Pastel
    variable: '#cdd6f4',      // Trắng kem khói
    parameter: '#fab387',     // Cam đào dịu (Peach)
    property: '#89dceb',      // Xanh mây nhạt
    string: '#f9e2af',        // Vàng kem mật ong (Warm Honey - rất dịu)
    number: '#fab387',        // Cam ấm
    type: '#b4befe',          // Tím oải hương Lavender
    comment: '#6c7086',       // Xám khói dịu mắt
    tag: '#f38ba8',           // Hồng phấn
    attribute: '#fab387',     // Cam đào
    operator: '#cdd6f4',      // Trắng xám
    punctuation: '#9399b2',   // Xám nhạt
    regexp: '#f5c2e7',        // Hồng nhạt
    special: '#cba6f7',       // Tím
  },
};
