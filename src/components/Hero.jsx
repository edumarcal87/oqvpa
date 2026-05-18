import { useContent } from '../hooks/useContent'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  const { data, loading } = useContent('hero')
  if (loading || !data) return null

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="orbit" />

      <div className="hero-content">
        <span className="hero-tag">{data.tag}</span>

        <img
          className="hero-logo"
          src={`${BASE}images/logo.png`}
          alt="O Que Vem Por Aí"
        />

        <p className="hero-desc">{data.descricao}</p>

        <div className="hero-actions">
          <a href={data.btnPrimarioLink} className="btn-p">
            {data.btnPrimarioTexto}
          </a>
          <a href={data.btnSecundarioLink} className="btn-o">
            {data.btnSecundarioTexto}
          </a>
        </div>
      </div>

      <div className="hero-avatar">
        <img src={`${BASE}images/bernardo.jpg`} alt="Bernardo de Lacerda" />
      </div>
    </section>
  )
}
