import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync } from 'fs'

function copyContentPlugin() {
  return {
    name: 'copy-content',
    closeBundle() {
      try {
        mkdirSync('dist/content', { recursive: true })
        const files = readdirSync('content')
        files.forEach(file => {
          copyFileSync(`content/${file}`, `dist/content/${file}`)
          console.log(`Copiado: content/${file} → dist/content/${file}`)
        })
      } catch (e) {
        console.error('Erro ao copiar content:', e)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), copyContentPlugin()],
  base: '/oqvpa/',
})