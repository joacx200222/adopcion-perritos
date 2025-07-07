import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/adopcion-perritos/', // 👈 tu nombre de repo exacto
  plugins: [react()],
})