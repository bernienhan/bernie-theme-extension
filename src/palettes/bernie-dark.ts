import { ThemePalette } from '../types.js';

/**
 * Bernie Dark Palette
 * Phong cách: Hiện đại, nền slate/navy dịu mắt, độ tương phản cao, màu sắc hài hòa.
 */
export const bernieDarkPalette: ThemePalette = {
  bg: {
    base: '#0f141c',          // Nền chính editor
    surface: '#0b0f15',       // Nền sidebar, title bar, panel
    surfaceHover: '#17202d',  // Khi hover item trong list/tree
    surfaceActive: '#1d2737', // Khi click chọn item
    overlay: '#131b26',       // Nền dropdown, modal popup, hover widget
    highlight: '#161e2a',     // Nền line đang đặt con trỏ
  },

  fg: {
    primary: '#e2e8f0',       // Chữ chính (trắng bạc dễ đọc)
    secondary: '#94a3b8',     // Chữ phụ, mô tả (xám trung tính)
    muted: '#64748b',         // Chữ mờ, comment, line number
    inverse: '#0b0f15',       // Chữ trên nền nút bấm sáng
  },

  border: {
    subtle: '#1e293b',        // Đường viền ngăn cách giữa các panel
    focus: '#38bdf8',         // Viền khi focus vào ô input
  },

  accent: {
    primary: '#38bdf8',       // Accent chính: Cyan Sky Blue
    secondary: '#818cf8',     // Accent phụ: Indigo
    selection: '#1e3a5f80',   // Vùng bôi đen văn bản (có alpha)
    matchHighlight: '#38bdf840', // Highlight từ khóa tìm kiếm
  },

  status: {
    error: '#f43f5e',         // Đỏ tươi Rose
    warning: '#f59e0b',       // Vàng cam Amber
    info: '#38bdf8',          // Xanh da trời
    success: '#10b981',       // Xanh ngọc Emerald
  },

  git: {
    added: '#10b981',
    modified: '#38bdf8',
    deleted: '#f43f5e',
    untracked: '#a78bfa',
    ignored: '#475569',
  },

  syntax: {
    keyword: '#f43f5e',       // const, let, if, return, import (Rose)
    storage: '#ec4899',       // function, class, type (Pink)
    func: '#38bdf8',          // Tên hàm, method call (Sky Blue)
    variable: '#f1f5f9',      // Tên biến (Trắng sáng)
    parameter: '#fb923c',     // Tham số hàm (Orange)
    property: '#38bdf8',      // Key của object, thuộc tính (Sky Blue nhạt)
    string: '#a3e635',        // Chuỗi ký tự (Lime Green ấm)
    number: '#fbbf24',        // Số, boolean, constants (Amber Yellow)
    type: '#a78bfa',          // Kiểu dữ liệu, Class, Interface (Purple)
    comment: '#64748b',       // Chú thích (Slate Gray dịu)
    tag: '#f43f5e',           // Thẻ HTML/JSX (Rose)
    attribute: '#fb923c',     // Thuộc tính tag HTML/JSX (Orange)
    operator: '#e2e8f0',      // Dấu toán tử +, -, =
    punctuation: '#94a3b8',   // Dấu {}, [], (), ;
    regexp: '#f472b6',        // Regular expressions
    special: '#c084fc',       // this, self, super (Tím nhạt)
  },
};
