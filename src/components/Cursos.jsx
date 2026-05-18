import { useContent } from '../hooks/useContent'
import { useState } from 'react'

export default function Cursos() {
  const { data, loading } = useContent('cursos')
  const [pagina, setPagina] = useState(0)

  if (loading || !data) return null

  const itensPorPagina = 5
  const total = data.lista.length
  const totalPaginas = Math.ceil(total / itensPorPagina)
  const inicio = pagina * itensPorPagina
  const itensPagina = data.lista.slice(inicio, inicio + itensPorPagina)

  return (
    <section className="cursos" id="cursos">
      <span className="stag">Formação</span>
      <h2 className="stitle">{data.titulo}</h2>
      <p className="ssub">{data.descricao}</p>

      <div className="cursos-grid">
        {itensPagina.map((item, i) => (
          <div className="curso-card" key={i}>
            <span className="curso-icon">{item.icone}</span>
            <div className="curso-body">
              <h3>{item.titulo}</h3>
              <span className="curso-inst">{item.instituicao}</span>
              <p>{item.descricao}</p>
              <div className="curso-footer">
                <span className="curso-ano">{item.ano}</span>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="curso-link">
                    Ver mais →
                  </a>
                )}
              </div>
            </div>
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
