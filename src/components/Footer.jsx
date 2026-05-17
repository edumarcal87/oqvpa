import { useContent } from '../hooks/useContent'

const BASE = import.meta.env.BASE_URL

export default function Footer() {
  const { data, loading } = useContent('footer')
  if (loading || !data) return null

  return (
    <footer className="footer">
      <a className="footer-logo" href="#">
        <img src={`${BASE}images/logo.png`} alt="O Que Vem Por Aí" />
      </a>
      <ul className="footer-links">
        {data.instagramLink && (
          <li><a href={data.instagramLink} target="_blank" rel="noreferrer">Instagram</a></li>
        )}
        {data.youtubeLink && (
          <li><a href={data.youtubeLink} target="_blank" rel="noreferrer">YouTube</a></li>
        )}
        {data.contatoEmail && (
          <li><a href={`mailto:${data.contatoEmail}`}>Contato</a></li>
        )}
      </ul>
      <span className="footer-copy">
        © {new Date().getFullYear()} {data.copyright}
      </span>
    </footer>
  )
}
