import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync, existsSync } from 'fs'

function copyAssetsPlugin() {
  return {
    name: 'copy-assets',
    closeBundle() {
      // Copia content/
      try {
        cpSync('content', 'dist/content', { recursive: true })
        console.log('✅ content/ copiado')
      } catch (e) {
        console.error('Erro content:', e)
      }

      // Copia admin/ da raiz (commitado no repo)
      try {
        if (existsSync('admin')) {
          cpSync('admin', 'dist/admin', { recursive: true })
          console.log('✅ admin/ copiado')
        } else {
          console.warn('⚠️ pasta admin/ não encontrada na raiz')
        }
      } catch (e) {
        console.error('Erro admin:', e)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), copyAssetsPlugin()],
  base: '/oqvpa/',
})