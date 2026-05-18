import { useContent } from '../hooks/useContent'
import { useState } from 'react'

export default function Engajamento() {
  const { data, loading } = useContent('engajamento')
  const [pagina, setPagina] = useState(0)

  if (loading || !data) return null

  const itensPorPagina = 6
  const total = data.lista.length
  const totalPaginas = Math.ceil(total / itensPorPagina)
  const inicio = pagina * itensPorPagina
  const itensPagina = data.lista.slice(inicio, inicio + itensPorPagina)

  return (
    <section className="engajamento" id="engajamento">
      <span className="stag">Clubes de STEAM e Astronomia</span>
      <h2 className="stitle">{data.titulo}</h2>
      <p className="ssub">{data.descricao}</p>

      <div className="eng-grid">
        {itensPagina.map((item, i) => (
          <div className="eng-card" key={i}>
            <div className="eng-card-top">
              <span className="eng-icon">{item.icone}</span>
              <span className="eng-ano">{item.ano}</span>
            </div>
            <h3>{item.titulo}</h3>
            <span className="eng-org">{item.organizacao}</span>
            <p>{item.descricao}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer" className="eng-link">
                Saiba mais →
              </a>
            )}
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
