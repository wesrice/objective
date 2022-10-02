import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(() => ({
  base: '',
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000
  },
  test: {
    environment: 'happy-dom',
    setupFiles: './src/test/setup.ts'
  }
}))
