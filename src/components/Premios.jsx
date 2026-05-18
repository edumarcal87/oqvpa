import { useContent } from '../hooks/useContent'
import { useState } from 'react'

export default function Premios() {
  const { data, loading } = useContent('premios')
  const [pagina, setPagina] = useState(0)

  if (loading || !data) return null

  const itensPorPagina = 6
  const total = data.lista.length
  const totalPaginas = Math.ceil(total / itensPorPagina)
  const inicio = pagina * itensPorPagina
  const itensPagina = data.lista.slice(inicio, inicio + itensPorPagina)

  return (
    <section className="premios" id="premios">
      <span className="stag">Reconhecimentos</span>
      <h2 className="stitle">Prêmios e Conquistas</h2>
      <p className="ssub">
        Reconhecimento em feiras nacionais, internacionais, olimpíadas científicas e competições de inovação.
      </p>

      <div className="prizes-grid">
        {itensPagina.map((p, i) => (
          <div className="prize" key={i}>
            <span className="prize-icon">{p.icone}</span>
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
            <span className="prize-yr">{p.ano}</span>
          </div>
        ))}
      </div>

      {totalPaginas > 1 && (
        <div className="carousel-nav">
          <button
            className="carousel-btn"
            onClick={() => setPagina(p => Math.max(0, p - 1))}
            disabled={pagina === 0}
          >
            ←
          </button>
          <div className="carousel-dots">
            {Array.from({ length: totalPaginas }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === pagina ? 'active' : ''}`}
                onClick={() => setPagina(i)}
              />
            ))}
          </div>
          <button
            className="carousel-btn"
            onClick={() => setPagina(p => Math.min(totalPaginas - 1, p + 1))}
            disabled={pagina === totalPaginas - 1}
          >
            →
          </button>
          <span className="carousel-count">
            {inicio + 1}–{Math.min(inicio + itensPorPagina, total)} de {total}
          </span>
        </div>
      )}
    </section>
  )
}
