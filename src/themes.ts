import { ThemeDefinition } from './types.js';
import { bernieDarkPalette } from './palettes/bernie-dark.js';
import { bernieVelvetPalette } from './palettes/bernie-velvet.js';
import { bernieRosePalette } from './palettes/bernie-rose.js';
import { bernieMidnightPalette } from './palettes/bernie-midnight.js';
import { bernieLightPalette } from './palettes/bernie-light.js';

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
    label: 'Bernie Dark (Eye Care)',
    uiTheme: 'vs-dark',
    palette: bernieDarkPalette,
  },
  {
    id: 'bernie-velvet',
    label: 'Bernie Velvet (Soft Pastel)',
    uiTheme: 'vs-dark',
    palette: bernieVelvetPalette,
  },
  {
    id: 'bernie-rose',
    label: 'Bernie Rose (Sakura Blossom)',
    uiTheme: 'vs-dark',
    palette: bernieRosePalette,
  },
  {
    id: 'bernie-midnight',
    label: 'Bernie Midnight (OLED Gold)',
    uiTheme: 'vs-dark',
    palette: bernieMidnightPalette,
  },
  {
    id: 'bernie-light',
    label: 'Bernie Light (Paper Clean)',
    uiTheme: 'vs',
    palette: bernieLightPalette,
  },
];
