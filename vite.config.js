import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ 專案若部署於 GitHub Pages 的子路徑，如 https://<user>.github.io/bonandjour_test
//    請將 base 設為 '/bonandjour_test/'
//    若部署於自有網域或根目錄，可改成 '/'。
export default defineConfig({
  plugins: [react()],
  base: '/bonandjour_test/'
})