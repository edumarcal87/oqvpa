import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Troque 'oqvpa' pelo nome exato do seu repositório no GitHub
export default defineConfig({
  plugins: [react()],
  base: '/oqvpa/',
})
