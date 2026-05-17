import { useContent } from '../hooks/useContent'

export default function Sobre() {
  const { data, loading } = useContent('sobre')
  if (loading || !data) return null

  return (
    <section className="sobre" id="sobre">
      <div className="sobre-text">
        <span className="stag">Bernardo de Lacerda</span>
        <h2 className="stitle">{data.titulo}</h2>
        <p>{data.paragrafo1}</p>
        <p>{data.paragrafo2}</p>
        <p>{data.paragrafo3}</p>
      </div>

      <div className="stats-grid">
        <div className="stat">
          <span className="stat-n">{data.stat1Numero}</span>
          <span className="stat-l">{data.stat1Label}</span>
        </div>
        <div className="stat">
          <span className="stat-n">{data.stat2Numero}</span>
          <span className="stat-l">{data.stat2Label}</span>
        </div>
        <div className="stat">
          <span className="stat-n">{data.stat3Numero}</span>
          <span className="stat-l">{data.stat3Label}</span>
        </div>
        <div className="stat">
          <span className="stat-n">{data.stat4Numero}</span>
          <span className="stat-l">{data.stat4Label}</span>
        </div>
      </div>
    </section>
  )
}
