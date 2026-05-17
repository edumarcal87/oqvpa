import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync, existsSync } from 'fs'

function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    closeBundle() {
      // Copia pasta content/
      try {
        cpSync('content', 'dist/content', { recursive: true })
        console.log('✅ content/ copiado para dist/content/')
      } catch (e) {
        console.error('Erro ao copiar content:', e)
      }

      // Copia pasta public/admin/
      try {
        if (existsSync('public/admin')) {
          cpSync('public/admin', 'dist/admin', { recursive: true })
          console.log('✅ public/admin/ copiado para dist/admin/')
        } else {
          console.warn('⚠️ public/admin/ não encontrado')
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