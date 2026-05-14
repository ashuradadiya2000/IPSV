import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: '0.0.0.0', // Set to '0.0.0.0' to be accessible externally, or 'localhost' for local only
    port: 3100,      // Set your desired port here
  }
})
