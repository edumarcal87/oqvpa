const opcoes = [
  '🌍 Sistema Solar',
  '⭐ Estrelas e Constelações',
  '🚀 Exploração Espacial',
  '🔭 Instrumentos Astronômicos',
]

export default function Quiz() {
  return (
    <section className="quiz-section" id="quiz">
      <div className="quiz-wrap">
        <span className="stag" style={{ display: 'block', marginBottom: '0.8rem' }}>
          Quiz Time
        </span>
        <h2>Você sabe astronomia?</h2>
        <p>
          Teste seus conhecimentos sobre o universo com as perguntas do Bernardo.
          Quanto você sabe sobre o cosmos?
        </p>
        <div className="quiz-opts">
          {opcoes.map((op, i) => (
            <button className="qopt" key={i}>{op}</button>
          ))}
        </div>
        <a className="btn-p" href="#">Começar o Quiz</a>
      </div>
    </section>
  )
}
