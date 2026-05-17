import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs'

function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    closeBundle() {
      // Copia pasta content/
      try {
        mkdirSync('dist/content', { recursive: true })
        readdirSync('content').forEach(file => {
          copyFileSync(`content/${file}`, `dist/content/${file}`)
          console.log(`Copiado: content/${file}`)
        })
      } catch (e) {
        console.error('Erro ao copiar content:', e)
      }

      // Copia pasta public/admin/
      try {
        if (existsSync('public/admin')) {
          mkdirSync('dist/admin', { recursive: true })
          readdirSync('public/admin').forEach(file => {
            copyFileSync(`public/admin/${file}`, `dist/admin/${file}`)
            console.log(`Copiado: public/admin/${file}`)
          })
        }
      } catch (e) {
        console.error('Erro ao copiar admin:', e)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), copyAssetsPlugin()],
  base: '/oqvpa/',
})