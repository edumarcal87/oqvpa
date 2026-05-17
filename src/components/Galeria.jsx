import { useContent } from '../hooks/useContent'

export default function Galeria() {
  const { data, loading } = useContent('galeria')
  if (loading || !data) return null

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
              ? <img src={item.src} alt={item.alt} />
              : <span style={{ fontSize: '2rem' }}>🌌</span>
            }
          </div>
        ))}
      </div>
    </section>
  )
}
