export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer-logo" href="#">
        <img src="/oqvpa/images/logo.png" alt="O Que Vem Por Aí" />
      </a>
      <ul className="footer-links">
        <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
        <li><a href="mailto:contato@exemplo.com">Contato</a></li>
      </ul>
      <span className="footer-copy">
        © {new Date().getFullYear()} Bernardo de Lacerda. Todos os direitos reservados.
      </span>
    </footer>
  )
}
