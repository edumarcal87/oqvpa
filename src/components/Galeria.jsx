// Substitua os emojis por imagens reais colocando os arquivos em public/images/
// Ex: { src: '/oqvpa/images/quadro1.jpg', alt: 'Galáxia' }
const itens = [
  { emoji: '🌌', alt: 'Galáxia' },
  { emoji: '🪐', alt: 'Saturno' },
  { emoji: '✨', alt: 'Estrelas' },
  { emoji: '🌠', alt: 'Meteoro' },
  { emoji: '🌙', alt: 'Lua' },
  { emoji: '☀️', alt: 'Sol' },
  { emoji: '🔭', alt: 'Telescópio' },
]

export default function Galeria() {
  return (
    <section className="galeria" id="galeria">
      <span className="stag">Quadros e Arte</span>
      <h2 className="stitle">O universo pintado</h2>
      <p className="ssub">
        Astronomia e arte se encontram em cada obra — o cosmos interpretado por um jovem olhar criativo.
      </p>
      <div className="gallery-grid">
        {itens.map((item, i) => (
          <div className="g-item" key={i}>
            {/* Quando tiver as imagens, troque o emoji por:
                <img src={item.src} alt={item.alt} /> */}
            {item.emoji}
          </div>
        ))}
      </div>
    </section>
  )
}
