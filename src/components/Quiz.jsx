import { useContent } from '../hooks/useContent'

export default function Quiz() {
  const { data, loading } = useContent('quiz')
  if (loading || !data) return null

  return (
    <section className="quiz-section" id="quiz">
      <div className="quiz-wrap">
        <span className="stag" style={{ display: 'block', marginBottom: '0.8rem' }}>
          Quiz Time
        </span>
        <h2>{data.titulo}</h2>
        <p>{data.descricao}</p>
        <div className="quiz-opts">
          {data.opcoes.map((op, i) => (
            <button className="qopt" key={i}>{op.texto}</button>
          ))}
        </div>
        <a className="btn-p" href={data.btnLink || '#'}>{data.btnTexto}</a>
      </div>
    </section>
  )
}
