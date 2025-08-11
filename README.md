# Bon & Jour 甜點官網（React + Vite）

這是可直接開發與部署到 GitHub Pages 的版本。已使用 **HashRouter**，可避免 GitHub Pages 重新整理 404 問題。

## 快速開始
```bash
npm install
npm run dev
npm run build
npm run deploy
```

> 若你的 GitHub repo 名稱不是 `bonandjour_test`，請修改 `vite.config.js` 的 `base` 設為 `/<你的 repo 名稱>/`，以便正確載入資源。

## 結構
- `src/pages/Home.jsx`、`src/pages/Products.jsx`
- `src/components`：Navbar、Footer、ProductCard
- `src/data/products.js`：範例商品資料
- `public/home.html`、`public/products.html`：靜態入口頁，會自動導向 SPA 對應路由
- `404.html`：與 `index.html` 同內容（備援）

## 部署到 GitHub Pages
1. 在 `vite.config.js` 設定 `base: '/<repo>/'`。
2. `npm run deploy` 會把 `dist/` 發佈上 gh-pages 分支。