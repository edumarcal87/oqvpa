import { useContent } from '../hooks/useContent'

export default function Projetos() {
  const { data, loading } = useContent('projetos')
  if (loading || !data) return null

  return (
    <section className="projetos" id="projetos">
      <span className="stag">Projetos premiados</span>
      <h2 className="stitle">O que Bernardo criou</h2>
      <p className="ssub">
        Cada projeto nasce de uma pergunta e cresce com curiosidade, dedicação e método científico.
      </p>
      <div className="proj-list">
        {data.lista.map((p, i) => (
          <a className="proj-row" href={p.link || '#'} key={i}>
            <span className="proj-num">{p.numero}</span>
            <div>
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
            </div>
            <span className="proj-badge">{p.badge}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
