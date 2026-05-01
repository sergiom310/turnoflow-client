import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // PWA deshabilitada temporalmente para evitar errores de imágenes
    // VitePWA({...})
  ],
})