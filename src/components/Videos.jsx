import { useContent } from '../hooks/useContent'

const BASE = import.meta.env.BASE_URL

const resolveUrl = (src) => {
  if (!src) return null
  const clean = src.startsWith('/') ? src.slice(1) : src
  return `${BASE}${clean}`
}

export default function Videos() {
  const { data, loading } = useContent('videos')
  if (loading || !data) return null

  return (
    <section className="videos" id="videos">
      <span className="stag">Canal</span>
      <h2 className="stitle">Vídeos em destaque</h2>
      <p className="ssub">
        Reportagens, documentários e episódios sobre o universo — para quem tem curiosidade de verdade.
      </p>
      <div className="videos-grid">
        {data.lista.map((v, i) => (
          <a className="vid" href={v.link} target="_blank" rel="noreferrer" key={i}>
            <div className="vid-thumb">
              {v.thumb && <img src={resolveUrl(v.thumb)} alt={v.titulo} />}
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
