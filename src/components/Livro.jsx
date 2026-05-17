export default function Livro() {
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
          <h2>Bem-vindo,<br />jovem explorador!</h2>
          <p>
            O livro do projeto "O Que Vem Por Aí" é um convite para que crianças e jovens
            mergulhem no universo da astronomia de forma lúdica, visual e emocionante.
            Com histórias, curiosidades e atividades, a obra transforma a ciência em aventura.
          </p>
          <p>
            Uma ferramenta poderosa para pais, professores e qualquer criança que já olhou
            para o céu e se perguntou: <em>o que vem por aí?</em>
          </p>
          <div className="book-actions">
            <a className="btn-p" href="#">Adquirir o livro</a>
            <a className="btn-o" href="#">Ver trecho gratuito</a>
          </div>
        </div>
      </div>
    </section>
  )
}
