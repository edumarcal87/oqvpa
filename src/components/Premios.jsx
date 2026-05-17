const premios = [
  {
    icone: '🏆',
    titulo: 'FEBRACE — Melhor Projeto',
    descricao: 'Reconhecimento pela Feira Brasileira de Ciências e Engenharia com projeto de astronomia analógica.',
    ano: '2023',
  },
  {
    icone: '🥇',
    titulo: 'Olimpíada Científica Nacional',
    descricao: 'Medalha de ouro em olimpíada de astronomia e ciências do espaço, representando o Rio de Janeiro.',
    ano: '2022',
  },
  {
    icone: '🌟',
    titulo: 'Certificado Internacional',
    descricao: 'Reconhecimento internacional por projeto de astrofotografia e divulgação científica para jovens.',
    ano: '2023',
  },
  {
    icone: '🎖️',
    titulo: 'Feira de Ciências Municipal',
    descricao: 'Primeiro lugar na categoria ciências naturais com experimento de astronomia de baixo custo.',
    ano: '2021',
  },
  {
    icone: '📜',
    titulo: 'Publicação Científica',
    descricao: 'Artigo publicado em revista de divulgação científica juvenil com metodologia de astrolábio analógico.',
    ano: '2022',
  },
  {
    icone: '🚀',
    titulo: 'Projeto Destaque NASA',
    descricao: 'Menção honrosa em programa de estímulo à astronomia para jovens com apoio de instituições americanas.',
    ano: '2023',
  },
]

export default function Premios() {
  return (
    <section className="premios" id="premios">
      <span className="stag">Reconhecimentos</span>
      <h2 className="stitle">Prêmios e Conquistas</h2>
      <p className="ssub">
        Reconhecimento em feiras nacionais, internacionais, olimpíadas científicas e competições de inovação.
      </p>
      <div className="prizes-grid">
        {premios.map((p, i) => (
          <div className="prize" key={i}>
            <span className="prize-icon">{p.icone}</span>
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
            <span className="prize-yr">{p.ano}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
