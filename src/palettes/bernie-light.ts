import { ThemePalette } from '../types.js';

/**
 * Bernie Light Palette (High-Contrast Bold Edition)
 * Phong cách: Nền trắng sạch, độ tương phản cực cao, chữ nổi bật rõ ràng,
 * in đậm (Bold) cho Methods, Variables, Keywords, Types để code sắc nét nhất.
 */
export const bernieLightPalette: ThemePalette = {
  bg: {
    base: '#ffffff',          // Nền editor trắng tinh
    surface: '#f8fafc',       // Nền sidebar, titlebar xám sáng nhạt
    surfaceHover: '#e2e8f0',  // Hover item rõ ràng
    surfaceActive: '#cbd5e1', // Active item
    overlay: '#ffffff',       // Popup, dropdown
    highlight: '#f1f5f9',     // Line highlight nhẹ
  },

  fg: {
    primary: '#090d16',       // Chữ đen mực Deep Ink (cực kỳ rõ nét, không bị mờ nhạt)
    secondary: '#334155',     // Chữ phụ đậm rõ
    muted: '#64748b',         // Chữ mờ, line number
    inverse: '#ffffff',       // Chữ trên nút đậm
  },

  border: {
    subtle: '#cbd5e1',        // Đường viền sắc nét
    focus: '#0284c7',         // Viền focus xanh nổi bật
  },

  accent: {
    primary: '#0284c7',       // Xanh Cerulean đậm
    secondary: '#7c3aed',     // Tím đậm
    selection: '#bae6fd99',   // Bôi đen văn bản xanh dương sáng rõ
    matchHighlight: '#fde04799', // Highlight tìm kiếm vàng đậm
  },

  status: {
    error: '#dc2626',         // Đỏ đậm
    warning: '#d97706',       // Cam đất
    info: '#0284c7',          // Xanh dương
    success: '#15803d',       // Xanh lá đậm
  },

  git: {
    added: '#15803d',
    modified: '#0284c7',
    deleted: '#dc2626',
    untracked: '#7c3aed',
    ignored: '#94a3b8',
  },

  syntax: {
    keyword: '#b91c1c',       // const, let, if, return, import (Đỏ Crimson Đậm - BOLD)
    storage: '#7e22ce',       // function, class, type, interface (Tím Đậm - BOLD)
    func: '#0369a1',          // Tên hàm, method calls (Xanh Sapphire Đậm - BOLD)
    variable: '#0f172a',      // Tên biến (Mực Đen Slate Sắc Nét - BOLD)
    parameter: '#c2410c',     // Tham số hàm (Cam Đất Terracotta - BOLD)
    property: '#0284c7',      // Thuộc tính object (Xanh Cyan Đậm)
    string: '#a14300',        // Chuỗi ký tự (Nâu Gỗ Hổ Phách Đậm - không dùng xanh lá chói)
    number: '#c2410c',        // Số, boolean, constants (Cam Đồng Đậm)
    type: '#6d28d9',          // Typescript Types, Class, Interface (Tím Indigo - BOLD)
    comment: '#64748b',       // Ghi chú // ... (Xám Slate Italic)
    tag: '#b91c1c',           // Thẻ HTML/JSX (Đỏ Crimson Đậm - BOLD)
    attribute: '#7c3aed',     // Thuộc tính HTML (Tím Đậm)
    operator: '#090d16',      // Toán tử +, -, =, => (Đen Mực Đậm)
    punctuation: '#334155',   // Dấu {}, [], (), ; (Xám Đậm)
    regexp: '#be185d',        // RegExp Đậm
    special: '#7e22ce',       // this, super, self (Tím Đậm Italic)
  },

  // Cấu hình in đậm (BOLD) sắc nét cho các thành phần code
  fontStyles: {
    keyword: 'bold',
    storage: 'bold',
    func: 'bold',
    variable: 'bold',
    parameter: 'bold',
    type: 'bold',
    tag: 'bold',
    comment: 'italic',
  },
};
