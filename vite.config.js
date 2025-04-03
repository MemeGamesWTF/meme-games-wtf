import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
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
