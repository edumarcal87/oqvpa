import { useContent } from '../hooks/useContent'

export default function Livro() {
  const { data, loading } = useContent('livro')
  if (loading || !data) return null

  return (
    <section className="livro" id="livro">
      <div className="book-grid">
        <div>
          <div className="book-cover">
            O QUE VEM<br />POR AÍ
            <span className="book-cover-sub">Bem-vindo,<br />jovem explorador!</span>
          </div>
        </div>

        <div className="book-det">
          <span className="stag">Livro</span>
          <h2>{data.titulo}</h2>
          <p>{data.paragrafo1}</p>
          <p>{data.paragrafo2}</p>
          <div className="book-actions">
            <a className="btn-p" href={data.btn1Link || '#'}>{data.btn1Texto}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
