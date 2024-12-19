import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/twitter-auth': {
        target: 'https://api.x.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/twitter-auth/, '')
      }
    }
  }
})
