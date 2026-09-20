import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/wp-json': {
        target: 'https://wp.maudrobin.fr',
        changeOrigin: true,
      },
      '/wp-content': {
        target: 'https://wp.maudrobin.fr',
        changeOrigin: true,
      },
    },
  },
})
