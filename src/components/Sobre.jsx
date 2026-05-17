export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-text">
        <span className="stag">Bernardo de Lacerda</span>
        <h2 className="stitle">Astrônomo, artista e jovem explorador</h2>
        <p>
          Bernardo de Lacerda é um jovem cientista apaixonado por astronomia e pela busca
          de respostas sobre o universo. Com projetos reconhecidos nacional e internacionalmente,
          ele combina rigor científico com uma visão criativa única.
        </p>
        <p>
          Fundador do projeto "O Que Vem Por Aí", Bernardo compartilha descobertas astronômicas,
          participa de olimpíadas científicas e transforma a ciência em algo acessível e
          emocionante para crianças e jovens de todo o Brasil.
        </p>
        <p>
          Seu trabalho une astronomia analógica, produção audiovisual e educação científica,
          rendendo prêmios, certificações e reconhecimento internacional.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat">
          <span className="stat-n">10+</span>
          <span className="stat-l">Prêmios conquistados</span>
        </div>
        <div className="stat">
          <span className="stat-n">5+</span>
          <span className="stat-l">Projetos científicos</span>
        </div>
        <div className="stat">
          <span className="stat-n">3</span>
          <span className="stat-l">Olimpíadas científicas</span>
        </div>
        <div className="stat">
          <span className="stat-n">∞</span>
          <span className="stat-l">Curiosidade pelo universo</span>
        </div>
      </div>
    </section>
  )
}
