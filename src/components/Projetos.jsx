const projetos = [
  {
    num: '01',
    titulo: 'Astrolábio Analógico',
    descricao: 'Ferramenta de astronomia de baixo custo para mapeamento celeste manual',
    badge: 'Premiado FEBRACE',
    link: '#',
  },
  {
    num: '02',
    titulo: 'NilponAstro',
    descricao: 'Aplicativo educacional de astronomia para crianças em linguagem acessível',
    badge: 'App Educacional',
    link: '#',
  },
  {
    num: '03',
    titulo: 'O Que Vem Por Aí — Série',
    descricao: 'Canal e série de divulgação científica explorando fenômenos astronômicos',
    badge: 'Divulgação',
    link: '#',
  },
  {
    num: '04',
    titulo: 'Jogo do Explorador',
    descricao: 'Jogo educativo sobre exploração espacial e astronomia para o público infantil',
    badge: 'Gamificação',
    link: '#',
  },
]

export default function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <span className="stag">Projetos premiados</span>
      <h2 className="stitle">O que Bernardo criou</h2>
      <p className="ssub">
        Cada projeto nasce de uma pergunta e cresce com curiosidade, dedicação e método científico.
      </p>
      <div className="proj-list">
        {projetos.map((p, i) => (
          <a className="proj-row" href={p.link} key={i}>
            <span className="proj-num">{p.num}</span>
            <div>
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
            </div>
            <span className="proj-badge">{p.badge}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
