export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="orbit" />

      <div className="hero-content">
        <span className="hero-tag">Ciência · Astronomia · Exploração</span>

        {/* Logo principal — coloque o arquivo em public/images/logo.jpg */}
        <img
          className="hero-logo"
          src="/oqvpa/images/logo.png"
          alt="O Que Vem Por Aí"
        />

        <p className="hero-desc">
          Explorando o universo com curiosidade, ciência e criatividade.
          Projetos premiados, descobertas incríveis e um olhar sempre voltado ao horizonte cósmico.
        </p>

        <div className="hero-actions">
          <a href="#projetos" className="btn-p">Explorar projetos</a>
          <a href="#sobre" className="btn-o">Conhecer Bernardo</a>
        </div>
      </div>

      {/* Foto do Bernardo — coloque o arquivo em public/images/bernardo.jpg */}
      <div className="hero-avatar">
        <img src="/oqvpa/images/bernardo.jpeg" alt="Bernardo de Lacerda" />
      </div>
    </section>
  )
}
