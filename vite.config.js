import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fixed port so this site is not confused with other local Vite apps (e.g. Adwizly on 5173).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5240,
    strictPort: false,
    open: '/',
  },
})
