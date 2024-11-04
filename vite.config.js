import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    //   sourcemap: true, // Enable source maps in development
  },
  // build: {
  //   sourcemap: true, // Enable source maps in production build
  // },
})
