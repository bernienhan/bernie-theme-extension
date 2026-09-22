import { ThemePalette } from '../types.js';

/**
 * =========================================================================
 * THEME PALETTE TEMPLATE
 * =========================================================================
 * Hướng dẫn tạo theme mới:
 * 1. Duplicate file này thành `src/palettes/<ten-theme-cua-ban>.ts`
 * 2. Tinh chỉnh các mã màu HEX bên dưới theo sở thích.
 * 3. Đăng ký theme mới trong file `src/themes.ts`.
 * 4. Chạy `npm run build` để xuất file JSON.
 * =========================================================================
 */
export const myCustomPalette: ThemePalette = {
  // --- Nền & Bề mặt UI ---
  bg: {
    base: '#1a1b26',          // Nền chính Editor
    surface: '#16161e',       // Nền Sidebar, Statusbar, Titlebar
    surfaceHover: '#282b3c',  // Nền khi rê chuột vào item danh sách
    surfaceActive: '#2f3549', // Nền khi click chọn item
    overlay: '#1f2335',       // Nền cửa sổ Popup, Autocomplete, Dialog
    highlight: '#202436',     // Nền dòng code hiện tại (Line Highlight)
  },

  // --- Chữ & Biểu tượng ---
  fg: {
    primary: '#c0caf5',       // Màu chữ chính
    secondary: '#9aa5ce',     // Màu chữ phụ / mô tả
    muted: '#565f89',         // Màu chữ mờ / Comment / Line Number
    inverse: '#15161e',       // Màu chữ trên nền nút sáng
  },

  // --- Đường viền ---
  border: {
    subtle: '#292e42',        // Đường kẻ ngăn cách các ô / panel
    focus: '#7aa2f7',         // Viền sáng lên khi click vào ô input
  },

  // --- Màu điểm nhấn (Accents) ---
  accent: {
    primary: '#7aa2f7',       // Màu chủ đạo (Nút bấm, Tab active, Con trỏ)
    secondary: '#bb9af7',     // Màu điểm nhấn phụ
    selection: '#364a82',     // Màu bôi đen văn bản
    matchHighlight: '#7aa2f740', // Màu khi Search tìm thấy kết quả
  },

  // --- Trạng thái thông báo ---
  status: {
    error: '#f7768e',         // Lỗi (Đỏ)
    warning: '#e0af68',       // Cảnh báo (Vàng/Cam)
    info: '#7dcfff',          // Thông tin (Xanh dương)
    success: '#9ece6a',       // Thành công (Xanh lá)
  },

  // --- Trạng thái Git ---
  git: {
    added: '#9ece6a',
    modified: '#7aa2f7',
    deleted: '#f7768e',
    untracked: '#bb9af7',
    ignored: '#414868',
  },

  // --- Cú pháp Code (Syntax Highlighting) ---
  syntax: {
    keyword: '#f7768e',       // const, let, if, return, import...
    storage: '#bb9af7',       // function, class, type, interface...
    func: '#7aa2f7',          // Tên hàm, lời gọi hàm...
    variable: '#c0caf5',      // Tên biến...
    parameter: '#ff9e64',     // Tham số hàm...
    property: '#7dcfff',      // Object key, struct field...
    string: '#9ece6a',        // Chuỗi ký tự "hello"...
    number: '#ff9e64',        // Số 123, true/false...
    type: '#2ac3de',          // Kiểu dữ liệu (string, number, User)...
    comment: '#565f89',       // Ghi chú code // ...
    tag: '#f7768e',           // Thẻ HTML/JSX (<div />, <App />)
    attribute: '#bb9af7',     // Thuộc tính HTML (className, id...)
    operator: '#89ddff',      // Dấu toán tử (+, -, =, =>...)
    punctuation: '#c0caf5',   // Dấu phân cách ({}, [], (), ;...)
    regexp: '#b4f9f8',        // Biểu thức chính quy RegExp
    special: '#bb9af7',       // this, super, self...
  },
};
