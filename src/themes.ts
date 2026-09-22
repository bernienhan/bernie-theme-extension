import { ThemeDefinition } from './types.js';
import { bernieDarkPalette } from './palettes/bernie-dark.js';
import { bernieMidnightPalette } from './palettes/bernie-midnight.js';

/**
 * =========================================================================
 * THEME REGISTRY
 * =========================================================================
 * Đăng ký tất cả các Theme Template của bạn tại đây.
 * Khi chạy `npm run build`, hệ thống sẽ tự động xuất ra file JSON tương ứng trong thư mục `themes/`.
 */
export const themes: ThemeDefinition[] = [
  {
    id: 'bernie-dark',
    label: 'Bernie Dark',
    uiTheme: 'vs-dark',
    palette: bernieDarkPalette,
  },
  {
    id: 'bernie-midnight',
    label: 'Bernie Midnight',
    uiTheme: 'vs-dark',
    palette: bernieMidnightPalette,
  },
  // Thêm các theme tiếp theo của bạn ở đây:
  // {
  //   id: 'bernie-light',
  //   label: 'Bernie Light',
  //   uiTheme: 'vs',
  //   palette: bernieLightPalette,
  // },
];
