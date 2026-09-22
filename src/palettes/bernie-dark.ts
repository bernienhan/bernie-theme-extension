import { ThemePalette } from '../types.js';

/**
 * Bernie Dark Palette (Eye-Care Edition)
 * Phong cách: Nền Slate/Navy sâu dịu mắt, hoàn toàn KHÔNG dùng xanh lá chói.
 * Chuỗi (String) dùng tông Warm Honey/Sand nhẹ nhàng; Keyword dùng Soft Coral/Rose.
 */
export const bernieDarkPalette: ThemePalette = {
  bg: {
    base: '#0d1117',          // Nền chính editor (GitHub Dark / Slate sâu)
    surface: '#090d12',       // Nền sidebar, title bar, panel
    surfaceHover: '#161e29',  // Khi hover item
    surfaceActive: '#1c2636', // Khi chọn item
    overlay: '#131b26',       // Nền popup, modal, dropdown
    highlight: '#161f2c',     // Nền line đang đặt con trỏ
  },

  fg: {
    primary: '#e6edf3',       // Chữ chính (Trắng bạc thanh thoát, không chói)
    secondary: '#8b949e',     // Chữ phụ (Xám tro dịu mắt)
    muted: '#586069',         // Chữ mờ, line number
    inverse: '#090d12',       // Chữ trên nền nút sáng
  },

  border: {
    subtle: '#21262d',        // Viền panel tinh tế
    focus: '#58a6ff',         // Viền focus Ice Blue
  },

  accent: {
    primary: '#58a6ff',       // Xanh dương Ice Blue dịu
    secondary: '#bc8cff',     // Tím Lavender
    selection: '#1f385c80',   // Bôi đen văn bản dịu mắt
    matchHighlight: '#58a6ff38', // Highlight từ khóa tìm kiếm
  },

  status: {
    error: '#ff7b72',         // Đỏ san hô mềm mại
    warning: '#f0883e',       // Cam ấm
    info: '#79c0ff',          // Xanh da trời pastel
    success: '#56d364',       // Xanh mint nhạt dịu
  },

  git: {
    added: '#56d364',
    modified: '#79c0ff',
    deleted: '#ff7b72',
    untracked: '#d2a8ff',
    ignored: '#484f58',
  },

  syntax: {
    keyword: '#ff7b72',       // const, let, if, return, import (Coral Rose dịu mắt)
    storage: '#ff7b72',       // function, class, type, interface
    func: '#79c0ff',          // Tên hàm, method call (Soft Sky Blue)
    variable: '#e6edf3',      // Tên biến (Trắng bạc dịu)
    parameter: '#ffa657',     // Tham số hàm (Soft Apricot/Peach)
    property: '#79c0ff',      // Thuộc tính object, struct
    string: '#eed49f',        // Chuỗi ký tự (Warm Honey/Sand - thay cho xanh lá chói)
    number: '#f0883e',        // Số, boolean, hằng số (Warm Amber)
    type: '#d2a8ff',          // Kiểu dữ liệu, Class, Interface (Soft Lilac Lavender)
    comment: '#6e7681',       // Ghi chú // ... (Cool Gray dịu mắt)
    tag: '#ff7b72',           // Thẻ HTML/JSX
    attribute: '#ffa657',     // Thuộc tính HTML/JSX
    operator: '#e6edf3',      // Dấu toán tử +, -, =
    punctuation: '#8b949e',   // Dấu ngoặc {}, [], (), ;
    regexp: '#f47067',        // Regular expressions
    special: '#bc8cff',       // this, self, super (Tím Lavender)
  },
};
