import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// vite.config.js
export default {
  build: {
    outDir: 'build', // Ensure this matches the directory you expect
  },
};

