import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      VITE_SOCKET_URL: process.env.VITE_SOCKET_URL
    },
  },
  define: {
    'process.env': process.env
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
