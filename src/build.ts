import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { themes } from './themes.js';
import { generateTheme } from './engine/generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const themesDir = path.join(rootDir, 'themes');
const packageJsonPath = path.join(rootDir, 'package.json');

function build() {
  console.log('🚀 Starting Bernie Theme Build Process...\n');

  // Đảm bảo thư mục themes/ tồn tại
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir, { recursive: true });
  }

  const generatedContributions: Array<{
    label: string;
    uiTheme: string;
    path: string;
  }> = [];

  // Duyệt qua từng theme trong Theme Registry
  for (const theme of themes) {
    const themeJson = generateTheme(theme);
    const fileName = `${theme.id}.json`;
    const filePath = path.join(themesDir, fileName);

    fs.writeFileSync(filePath, JSON.stringify(themeJson, null, 2), 'utf-8');
    console.log(`  ✅ Generated theme: ${theme.label} -> themes/${fileName}`);

    generatedContributions.push({
      label: theme.label,
      uiTheme: theme.uiTheme,
      path: `./themes/${fileName}`,
    });
  }

  // Tự động đồng bộ với package.json (contributes.themes)
  if (fs.existsSync(packageJsonPath)) {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    pkg.contributes = pkg.contributes || {};
    pkg.contributes.themes = generatedContributions;

    fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
    console.log('\n  🔄 Auto-synchronized package.json "contributes.themes" with registry.');
  }

  console.log('\n🎉 Build completed successfully!');
}

build();
