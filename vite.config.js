import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/wp-json': {
        target: 'http://eqbqyvl.cluster131.hosting.ovh.net',
        changeOrigin: true,
      },
      '/wp-content': {
        target: 'http://eqbqyvl.cluster131.hosting.ovh.net',
        changeOrigin: true,
      },
    },
  },
})
