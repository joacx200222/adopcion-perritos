import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/adopcion-perritos/', // 👈 IMPORTANTE: esto es lo que arregla el problema
  plugins: [react()],
})