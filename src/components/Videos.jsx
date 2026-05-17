const videos = [
  {
    titulo: 'O que é um buraco negro?',
    subtitulo: 'Episódio 1 — Astronomia para curiosos',
    link: 'https://youtube.com',
  },
  {
    titulo: 'Como funciona o astrolábio',
    subtitulo: 'Episódio 2 — Ferramentas do astrônomo',
    link: 'https://youtube.com',
  },
  {
    titulo: 'A corrida espacial do futuro',
    subtitulo: 'Episódio 3 — Exploração espacial',
    link: 'https://youtube.com',
  },
  {
    titulo: 'Olimpíadas: como participar',
    subtitulo: 'Dicas para jovens cientistas',
    link: 'https://youtube.com',
  },
  {
    titulo: 'Mapeando o céu com papel e lápis',
    subtitulo: 'Projeto Astrolábio Analógico ao vivo',
    link: 'https://youtube.com',
  },
  {
    titulo: 'Entrevista: Bernardo na FEBRACE',
    subtitulo: 'Reportagem especial do evento',
    link: 'https://youtube.com',
  },
]

export default function Videos() {
  return (
    <section className="videos" id="videos">
      <span className="stag">Canal</span>
      <h2 className="stitle">Vídeos em destaque</h2>
      <p className="ssub">
        Reportagens, documentários e episódios sobre o universo — para quem tem curiosidade de verdade.
      </p>
      <div className="videos-grid">
        {videos.map((v, i) => (
          <a className="vid" href={v.link} target="_blank" rel="noreferrer" key={i}>
            <div className="vid-thumb">
              {/* Adicione thumbnails colocando imagens em public/images/ e usando:
                  <img src={v.thumb} alt={v.titulo} /> */}
              <div className="play">&#9658;</div>
            </div>
            <div className="vid-info">
              <h4>{v.titulo}</h4>
              <p>{v.subtitulo}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
