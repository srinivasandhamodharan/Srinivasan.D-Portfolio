import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM config so ESM-only plugins can be loaded without issues
export default defineConfig({
  plugins: [react()],
})
