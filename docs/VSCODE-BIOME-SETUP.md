# 🎯 VS Code + Biome Integration Guide

## 📦 Required Extension

Install the official Biome extension:

- **Extension ID**: `biomejs.biome`
- **Install via Command Palette**: `Ctrl+Shift+P` → "Extensions: Install Extensions" → Search "Biome"
- **Install via CLI**: `code --install-extension biomejs.biome`

## ⚙️ VS Code Settings

After installing the Biome extension, your `.vscode/settings.json` should work with these settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit",
    "source.fixAll.biome": "explicit"
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.rulers": [100],
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[json]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "eslint.enable": false,
  "prettier.enable": false,
  "typescript.preferences.quoteStyle": "double"
}
```

## 🚀 Features You'll Get

### ✅ Real-time Linting

- Errors and warnings appear as you type
- Red squiggly lines for errors
- Yellow squiggly lines for warnings

### ✅ Format on Save

- Automatic formatting when you save files
- Follows your `biome.json` configuration
- 2-space indentation, double quotes, semicolons

### ✅ Quick Fixes

- `Ctrl+.` (Cmd+. on Mac) for quick fixes
- Auto-fix many lint errors
- Organize imports automatically

### ✅ Code Actions

- Right-click → "Format Document"
- Right-click → "Organize Imports"
- Command Palette → "Format Document with Biome"

## 🔧 Manual Setup Steps

If the extension doesn't work automatically:

1. **Install Extension**:

   ```bash
   code --install-extension biomejs.biome
   ```

2. **Reload VS Code**: `Ctrl+Shift+P` → "Developer: Reload Window"

3. **Check Extension**: `Ctrl+Shift+X` → Search "Biome" → Should show "Installed"

4. **Test**: Open a `.ts` file → Make a formatting change → Save → Should auto-format

## 🎯 Keyboard Shortcuts

- **Format Document**: `Shift+Alt+F` (Windows/Linux) or `Shift+Option+F` (Mac)
- **Quick Fix**: `Ctrl+.` (Windows/Linux) or `Cmd+.` (Mac)
- **Command Palette**: `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)

## 🐛 Troubleshooting

### Extension Not Working?

1. Check if Biome extension is installed and enabled
2. Reload VS Code window
3. Check Output panel: View → Output → Select "Biome"

### Formatting Not Working?

1. Right-click in file → "Format Document With..." → Select "Biome"
2. Check if `biome.json` exists in project root
3. Try manually: `Ctrl+Shift+P` → "Format Document with Biome"

### Still Using ESLint/Prettier?

Make sure these are disabled in settings:

```json
{
  "eslint.enable": false,
  "prettier.enable": false
}
```

## 📊 Current Configuration

Your project is configured with:

- **Formatter**: Biome (2 spaces, double quotes, semicolons)
- **Linter**: Biome (recommended rules, `any` and `arrayIndexKey` disabled)
- **Line Length**: 100 characters
- **Import Organization**: Enabled
- **Format on Save**: Enabled

## 🎉 Success Indicators

You'll know it's working when:

- ✅ Files auto-format on save
- ✅ Red/yellow squiggles appear for errors/warnings
- ✅ Quick fixes work with `Ctrl+.`
- ✅ Import statements get organized automatically
- ✅ Status bar shows "Biome" when editing JS/TS files
