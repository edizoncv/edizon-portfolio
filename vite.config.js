import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const AZURE_BASE = 'https://datot-pbi-agent-gvadhwc6hxctczfg.southcentralus-01.azurewebsites.net'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-proxy': {
        target: AZURE_BASE,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-proxy/, '/api'),
        secure: true,
      },
    },
  },
})
