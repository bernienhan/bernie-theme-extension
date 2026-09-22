# 🎨 Bernie Themes (VS Code)

Bộ theme hiện đại cho Visual Studio Code được xây dựng trên kiến trúc **Design Token & Theme Engine** bằng TypeScript, hỗ trợ mở rộng không giới hạn các biến thể màu sắc.

---

## 🚀 Hướng dẫn phát triển & Dùng thử (Quick Start)

### 1. Cài đặt thư viện
```bash
npm install
```

### 2. Build toàn bộ theme
```bash
npm run build
```
Lệnh này sẽ:
* Đọc toàn bộ danh sách theme trong `src/themes.ts`.
* Tự động sinh file JSON trong thư mục `themes/`.
* Tự động đồng bộ khai báo `contributes.themes` trong `package.json`.

### 3. Xem trước / Test trực tiếp (F5)
* Mở project này trong VS Code.
* Nhấn phím **`F5`** (hoặc vào tab *Run & Debug* -> chọn *Extension Test (F5)*).
* Một cửa sổ VS Code mới sẽ mở lên. Bạn nhấn `Ctrl + K, Ctrl + T` để chọn các theme:
  - **Bernie Dark**
  - **Bernie Midnight**

---

## ➕ Cách thêm một Theme Template mới (Chỉ 2 phút)

Khi muốn tạo thêm 1 bảng theme mới (ví dụ: `Bernie Light`, `Bernie Forest`, `Bernie Cyberpunk`...):

1. **Tạo file bảng màu**:
   - Copy file `src/palettes/template.ts` thành `src/palettes/bernie-forest.ts`.
   - Tinh chỉnh các mã màu HEX theo sở thích của bạn.

2. **Đăng ký vào Theme Registry (`src/themes.ts`)**:
   ```typescript
   import { bernieForestPalette } from './palettes/bernie-forest.js';

   export const themes: ThemeDefinition[] = [
     // ... các theme cũ
     {
       id: 'bernie-forest',
       label: 'Bernie Forest',
       uiTheme: 'vs-dark', // hoặc 'vs' nếu là Light theme
       palette: bernieForestPalette,
     },
   ];
   ```

3. **Chạy Build**:
   ```bash
   npm run build
   ```
   *Xong! File `themes/bernie-forest.json` sẽ tự động được sinh ra và tích hợp sẵn sàng.*

---

## 📦 Đóng gói & Cài đặt vào máy cá nhân

Để cài đặt dùng vĩnh viễn trên máy chính của bạn:

1. Chạy lệnh đóng gói:
   ```bash
   npm run package
   ```
   *(Sẽ sinh ra file `bernie-theme-x.x.x.vsix`)*

2. Trong VS Code:
   - Mở tab **Extensions** (`Ctrl + Shift + X`).
   - Bấm vào dấu `...` ở góc trên bên phải.
   - Chọn **Install from VSIX...** và chọn file `.vsix` vừa tạo.

---

## 📂 Cấu trúc thư mục

```
bernie-theme/
├── .vscode/
│   └── launch.json            # Cấu hình F5 Extension Debugging
├── src/
│   ├── engine/                # Logic tính toán Theme
│   │   ├── generator.ts       # Sinh JSON chuẩn VS Code
│   │   ├── syntax.ts          # Bộ quy tắc TextMate Scopes (code highlighting)
│   │   └── workbench.ts       # Bộ quy tắc UI VS Code (ActivityBar, SideBar, Tabs...)
│   ├── palettes/              # Nơi chứa các bảng màu
│   │   ├── bernie-dark.ts     # Theme Slate Dark hiện đại
│   │   ├── bernie-midnight.ts # Theme AMOLED Pure Black
│   │   └── template.ts        # File mẫu để tạo theme mới
│   ├── build.ts               # Script build xuất theme & sync package.json
│   ├── themes.ts              # Theme Registry (Đăng ký theme tập trung)
│   └── types.ts               # Interface TypeScript chuẩn
├── themes/                    # Thư mục chứa JSON output
├── package.json
└── tsconfig.json
```
