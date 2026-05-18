import { useContent } from '../hooks/useContent'

export default function Cursos() {
  const { data, loading } = useContent('cursos')
  if (loading || !data) return null

  return (
    <section className="cursos" id="cursos">
      <span className="stag">Formação</span>
      <h2 className="stitle">{data.titulo}</h2>
      <p className="ssub">{data.descricao}</p>

      <div className="cursos-grid">
        {data.lista.map((item, i) => (
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
    </section>
  )
}
