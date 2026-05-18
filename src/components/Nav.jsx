import { useContent } from '../hooks/useContent'

const BASE = import.meta.env.BASE_URL

export default function Nav() {
  const { data, loading } = useContent('footer')
  if (loading || !data) return null

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#">
          <img src={`${BASE}images/logo.png`} alt="O Que Vem Por Aí" />
        </a>
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#premios">Prêmios</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#engajamento">Engajamento</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#videos">Vídeos</a></li>
          <li><a href="#livro">Livro</a></li>
          <li><a href="#quiz">Quiz</a></li>
          {data.portfolioLink && (
            <li>
              <a href={data.portfolioLink} target="_blank" rel="noreferrer" className="nav-link-destaque">
                Portfólio
              </a>
            </li>
          )}
          {data.lattesLink && (
            <li>
              <a href={data.lattesLink} target="_blank" rel="noreferrer" className="nav-link-destaque">
                Lattes
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
