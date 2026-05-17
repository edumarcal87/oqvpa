export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav-logo" href="#">
        {/* Substitua pelo caminho da sua logo após colocar na pasta public/images/ */}
        <img src="/oqvpa/images/logo.png" alt="O Que Vem Por Aí" />
      </a>
      <ul className="nav-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#premios">Prêmios</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#videos">Vídeos</a></li>
        <li><a href="#livro">Livro</a></li>
        <li><a href="#quiz">Quiz</a></li>
      </ul>
    </nav>
  )
}
