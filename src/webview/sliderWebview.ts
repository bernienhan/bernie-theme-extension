export function getWarmthSliderHtml(currentWarmth: number): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bernie Warmth Customizer</title>
  <style>
    :root {
      --bg: var(--vscode-editor-background, #ffffff);
      --fg: var(--vscode-editor-foreground, #090d16);
      --accent: var(--vscode-button-background, #0284c7);
      --border: var(--vscode-panel-border, #cbd5e1);
      --card-bg: var(--vscode-sideBar-background, #f8fafc);
    }
    body {
      font-family: var(--vscode-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
      color: var(--fg);
      background-color: var(--bg);
      padding: 24px 20px;
      margin: 0;
      user-select: none;
    }
    .container {
      max-width: 460px;
      margin: 0 auto;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }
    .header h2 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.2px;
    }
    .badge {
      font-size: 11px;
      background: var(--accent);
      color: #fff;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 18px;
      margin-bottom: 16px;
    }
    .slider-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    .slider-title {
      font-weight: 600;
      font-size: 13px;
    }
    .val-display {
      font-size: 15px;
      font-weight: 700;
      color: var(--accent);
      background: rgba(2, 132, 199, 0.08);
      padding: 3px 10px;
      border-radius: 4px;
      border: 1px solid rgba(2, 132, 199, 0.2);
    }
    .slider-wrapper {
      position: relative;
      margin: 18px 0 8px 0;
    }
    input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(to right, #ffffff 0%, #faf5ea 30%, #f7f1e3 60%, #fdf3db 100%);
      border: 1px solid #cbd5e1;
      outline: none;
      cursor: pointer;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--accent);
      border: 2px solid #ffffff;
      cursor: grab;
      box-shadow: 0 1px 4px rgba(0,0,0,0.2);
      transition: transform 0.1s ease;
    }
    input[type=range]:active::-webkit-slider-thumb {
      cursor: grabbing;
      transform: scale(1.15);
    }
    .scale-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--vscode-descriptionForeground, #64748b);
      margin-top: 6px;
      font-weight: 500;
    }
    .presets-title {
      font-size: 11px;
      font-weight: 600;
      margin-top: 18px;
      margin-bottom: 8px;
      color: var(--vscode-descriptionForeground, #64748b);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .presets-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
    }
    .btn-preset {
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--fg);
      padding: 7px 4px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      transition: all 0.12s ease;
    }
    .btn-preset:hover {
      border-color: var(--accent);
    }
    .btn-preset.active {
      background: var(--accent);
      color: #ffffff;
      border-color: var(--accent);
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 14px;
    }
    .btn {
      flex: 1;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--fg);
      transition: opacity 0.15s;
    }
    .btn:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Bernie Warmth Customizer</h2>
      <span class="badge">Realtime</span>
    </div>

    <div class="card">
      <div class="slider-header">
        <span class="slider-title">Light Theme Warmth</span>
        <span class="val-display" id="valText">${currentWarmth}%</span>
      </div>

      <div class="slider-wrapper">
        <input type="range" id="warmthSlider" min="0" max="100" value="${currentWarmth}" step="1" />
      </div>

      <div class="scale-labels">
        <span>0% Cool</span>
        <span>30% Paper</span>
        <span>60% Warm</span>
        <span>100% Sepia</span>
      </div>

      <div class="presets-title">Presets</div>
      <div class="presets-grid">
        <button class="btn-preset ${currentWarmth === 0 ? 'active' : ''}" onclick="setWarmth(0)">0% Cool</button>
        <button class="btn-preset ${currentWarmth === 30 ? 'active' : ''}" onclick="setWarmth(30)">30% Paper</button>
        <button class="btn-preset ${currentWarmth === 60 ? 'active' : ''}" onclick="setWarmth(60)">60% Warm</button>
        <button class="btn-preset ${currentWarmth === 100 ? 'active' : ''}" onclick="setWarmth(100)">100% Sepia</button>
      </div>
    </div>

    <div class="actions">
      <button class="btn" onclick="resetWarmth()">Reset to Default (30%)</button>
    </div>
  </div>

  <script>
    const vscode = acquireVsCodeApi();
    const slider = document.getElementById('warmthSlider');
    const valText = document.getElementById('valText');

    function updateUI(val) {
      valText.textContent = val + '%';
      
      document.querySelectorAll('.btn-preset').forEach(btn => {
        const pVal = parseInt(btn.textContent);
        btn.classList.toggle('active', pVal === parseInt(val));
      });
    }

    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      updateUI(val);
      vscode.postMessage({ command: 'setWarmth', value: val });
    });

    function setWarmth(val) {
      slider.value = val;
      updateUI(val);
      vscode.postMessage({ command: 'setWarmth', value: val });
    }

    function resetWarmth() {
      setWarmth(30);
    }
  </script>
</body>
</html>`;
}
