import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Served from omrib.dev/rosenthal/ (GitHub Pages project site), so assets and
// routes live under the /rosenthal/ base.
export default defineConfig({
  base: '/rosenthal/',
  plugins: [react(), tailwindcss()],
})
