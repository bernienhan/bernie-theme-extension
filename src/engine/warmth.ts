import { ThemePalette } from '../types.js';
import { bernieLightPalette } from '../palettes/bernie-light.js';

/**
 * Hàm nội suy màu sắc tuyến tính (Linear Color Interpolation)
 * Hòa trộn mượt mà giữa 2 mã màu Hex theo tỷ lệ 0.0 -> 1.0
 */
function blendHex(c1: string, c2: string, ratio: number): string {
  const r = Math.max(0, Math.min(1, ratio));
  const hex1 = c1.replace('#', '');
  const hex2 = c2.replace('#', '');

  const r1 = parseInt(hex1.substring(0, 2), 16);
  const g1 = parseInt(hex1.substring(2, 4), 16);
  const b1 = parseInt(hex1.substring(4, 6), 16);

  const r2 = parseInt(hex2.substring(0, 2), 16);
  const g2 = parseInt(hex2.substring(2, 4), 16);
  const b2 = parseInt(hex2.substring(4, 6), 16);

  const resR = Math.round(r1 + (r2 - r1) * r);
  const resG = Math.round(g1 + (g2 - g1) * r);
  const resB = Math.round(b1 + (b2 - b1) * r);

  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(resR)}${toHex(resG)}${toHex(resB)}`;
}

/**
 * Thuật toán tính toán nhiệt độ màu (Warmth / Color Temperature Blending)
 * level: 0 (Cool White) -> 100 (Warm Sepia)
 */
export function generateWarmLightPalette(warmthLevel: number): ThemePalette {
  const t = Math.max(0, Math.min(100, warmthLevel)) / 100; // 0.0 -> 1.0

  // Màu nền: Blend từ Trắng tuyết (#ffffff) -> Trắng ngà (#faf5ea) -> Vàng kem Sepia (#fdf3db)
  const baseBg = blendHex('#ffffff', '#fdf3db', t * 0.9);
  const surfaceBg = blendHex('#f8fafc', '#f4e8cb', t * 0.9);
  const hoverBg = blendHex('#e2e8f0', '#ebddbe', t * 0.85);
  const activeBg = blendHex('#cbd5e1', '#dec9a4', t * 0.85);
  const highlightBg = blendHex('#f1f5f9', '#f5ebce', t * 0.85);

  // Màu chữ: Blend từ Đen mực lạnh (#090d16) -> Nâu than ấm (#231b14)
  const primaryFg = blendHex('#090d16', '#231b14', t * 0.8);
  const secondaryFg = blendHex('#334155', '#4c3f35', t * 0.7);
  const mutedFg = blendHex('#64748b', '#786b5f', t * 0.6);

  // Đường viền
  const subtleBorder = blendHex('#cbd5e1', '#d8c7a6', t * 0.8);

  // Accent
  const primaryAccent = '#0284c7';

  // Màu cú pháp (Syntax)
  const keyword = blendHex('#b91c1c', '#991b1b', t * 0.3);
  const stringColor = blendHex('#a14300', '#853500', t * 0.4);
  const funcColor = blendHex('#0369a1', '#075985', t * 0.3);
  const typeColor = blendHex('#6d28d9', '#5b21b6', t * 0.3);

  return {
    ...bernieLightPalette,
    bg: {
      base: baseBg,
      surface: surfaceBg,
      surfaceHover: hoverBg,
      surfaceActive: activeBg,
      overlay: baseBg,
      highlight: highlightBg,
    },
    fg: {
      primary: primaryFg,
      secondary: secondaryFg,
      muted: mutedFg,
      inverse: '#ffffff',
    },
    border: {
      subtle: subtleBorder,
      focus: primaryAccent,
    },
    accent: {
      ...bernieLightPalette.accent,
      primary: primaryAccent,
    },
    syntax: {
      ...bernieLightPalette.syntax,
      variable: primaryFg,
      keyword,
      string: stringColor,
      func: funcColor,
      type: typeColor,
      operator: primaryFg,
    },
    fontStyles: {
      ...bernieLightPalette.fontStyles,
    },
  };
}
