import { useContent } from '../hooks/useContent'

const BASE = import.meta.env.BASE_URL

export default function Galeria() {
  const { data, loading } = useContent('galeria')
  if (loading || !data) return null

  // Remove a barra inicial do src para evitar duplicação com BASE_URL
  const resolveUrl = (src) => {
    if (!src) return null
    const clean = src.startsWith('/') ? src.slice(1) : src
    return `${BASE}${clean}`
  }

  return (
    <section className="galeria" id="galeria">
      <span className="stag">Quadros e Arte</span>
      <h2 className="stitle">O universo pintado</h2>
      <p className="ssub">
        Astronomia e arte se encontram em cada obra — o cosmos interpretado por um jovem olhar criativo.
      </p>
      <div className="gallery-grid">
        {data.itens.map((item, i) => (
          <div className="g-item" key={i}>
            {item.src
              ? <img src={resolveUrl(item.src)} alt={item.alt || `Quadro ${i + 1}`} />
              : <span style={{ fontSize: '2rem' }}>🌌</span>
            }
          </div>
        ))}
      </div>
    </section>
  )
}
