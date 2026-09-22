import { ThemePalette } from '../types.js';

/**
 * Bernie Rose Palette (Sakura & Dark Plum)
 * Phong cách: Tông hồng hoa anh đào (Sakura / Rose Quartz / Plum), nền tím khói ánh hồng sang trọng,
 * màu sắc ấm áp, quyến rũ, không dùng xanh lá chói.
 */
export const bernieRosePalette: ThemePalette = {
  bg: {
    base: '#1a141d',          // Nền chính editor (Plum Dark ánh hồng tím)
    surface: '#140f17',       // Nền sidebar, titlebar rất trầm
    surfaceHover: '#261b2c',  // Hover item
    surfaceActive: '#33233b', // Active item
    overlay: '#201825',       // Nền popup, modal
    highlight: '#231b27',     // Line highlight
  },

  fg: {
    primary: '#fce7f3',       // Chữ chính (Trắng hồng phấn nhẹ nhàng)
    secondary: '#d4a5b8',     // Chữ phụ (Hồng khói)
    muted: '#7a5a6c',         // Chữ mờ, comment
    inverse: '#140f17',       // Chữ trên nền nút sáng
  },

  border: {
    subtle: '#2d1f33',        // Viền ánh mận
    focus: '#f472b6',         // Viền focus Hồng Sakura
  },

  accent: {
    primary: '#f472b6',       // Hồng Sakura Pink
    secondary: '#fb7185',     // Hồng đào Rose
    selection: '#ec489938',   // Bôi đen văn bản ánh hồng
    matchHighlight: '#f472b650', // Highlight tìm kiếm
  },

  status: {
    error: '#fb7185',         // Rose đỏ
    warning: '#fbb6ce',       // Hồng phấn sáng
    info: '#f472b6',          // Hồng Sakura
    success: '#fda4af',       // Hồng pastel nhạt
  },

  git: {
    added: '#fda4af',
    modified: '#f472b6',
    deleted: '#fb7185',
    untracked: '#e879f9',
    ignored: '#614656',
  },

  syntax: {
    keyword: '#fb7185',       // const, let, return, import (Rose Red)
    storage: '#f43f5e',       // function, class, type (Magenta Rose)
    func: '#f472b6',          // Tên hàm (Sakura Pink)
    variable: '#fce7f3',      // Tên biến (Trắng ánh hồng sữa)
    parameter: '#fbcfe8',     // Tham số hàm (Soft Blush Pink)
    property: '#fda4af',      // Thuộc tính object (Hồng đào nhẹ)
    string: '#fef08a',        // Chuỗi ký tự (Vàng bơ nhạt ấm - thay cho xanh lá)
    number: '#f472b6',        // Số, boolean, constants (Pink)
    type: '#e879f9',          // Kiểu dữ liệu, Class, Interface (Fuchsia/Orchid)
    comment: '#836577',       // Ghi chú // ... (Muted Plum Gray)
    tag: '#fb7185',           // Thẻ HTML/JSX
    attribute: '#fbcfe8',     // Thuộc tính HTML/JSX
    operator: '#fce7f3',      // Toán tử +, -, =
    punctuation: '#d4a5b8',   // Dấu {}, [], (), ;
    regexp: '#f43f5e',        // RegExp
    special: '#e879f9',       // this, super, self (Tím hồng)
  },
};
