import { useContent } from '../hooks/useContent'

export default function Engajamento() {
  const { data, loading } = useContent('engajamento')
  if (loading || !data) return null

  return (
    <section className="engajamento" id="engajamento">
      <span className="stag">Clubes de STEAM e Astronomia</span>
      <h2 className="stitle">{data.titulo}</h2>
      <p className="ssub">{data.descricao}</p>

      <div className="eng-grid">
        {data.lista.map((item, i) => (
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
    </section>
  )
}
