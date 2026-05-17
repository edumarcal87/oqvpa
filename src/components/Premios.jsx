import { useContent } from '../hooks/useContent'

export default function Premios() {
  const { data, loading } = useContent('premios')
  if (loading || !data) return null

  return (
    <section className="premios" id="premios">
      <span className="stag">Reconhecimentos</span>
      <h2 className="stitle">Prêmios e Conquistas</h2>
      <p className="ssub">
        Reconhecimento em feiras nacionais, internacionais, olimpíadas científicas e competições de inovação.
      </p>
      <div className="prizes-grid">
        {data.lista.map((p, i) => (
          <div className="prize" key={i}>
            <span className="prize-icon">{p.icone}</span>
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
            <span className="prize-yr">{p.ano}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
