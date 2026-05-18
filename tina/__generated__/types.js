export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HeroPartsFragmentDoc = gql`
    fragment HeroParts on Hero {
  __typename
  tag
  descricao
  btnPrimarioTexto
  btnPrimarioLink
  btnSecundarioTexto
  btnSecundarioLink
}
    `;
export const SobrePartsFragmentDoc = gql`
    fragment SobreParts on Sobre {
  __typename
  titulo
  paragrafo1
  paragrafo2
  paragrafo3
  stat1Numero
  stat1Label
  stat2Numero
  stat2Label
  stat3Numero
  stat3Label
  stat4Numero
  stat4Label
}
    `;
export const PremiosPartsFragmentDoc = gql`
    fragment PremiosParts on Premios {
  __typename
  lista {
    __typename
    icone
    titulo
    descricao
    ano
  }
}
    `;
export const ProjetosPartsFragmentDoc = gql`
    fragment ProjetosParts on Projetos {
  __typename
  lista {
    __typename
    numero
    titulo
    descricao
    badge
    link
  }
}
    `;
export const CursosPartsFragmentDoc = gql`
    fragment CursosParts on Cursos {
  __typename
  titulo
  subtitulo
  descricao
  lista {
    __typename
    icone
    titulo
    instituicao
    ano
    descricao
    link
  }
}
    `;
export const EngajamentoPartsFragmentDoc = gql`
    fragment EngajamentoParts on Engajamento {
  __typename
  titulo
  subtitulo
  descricao
  lista {
    __typename
    icone
    titulo
    organizacao
    ano
    descricao
    link
  }
}
    `;
export const GaleriaPartsFragmentDoc = gql`
    fragment GaleriaParts on Galeria {
  __typename
  itens {
    __typename
    src
    alt
  }
}
    `;
export const VideosPartsFragmentDoc = gql`
    fragment VideosParts on Videos {
  __typename
  lista {
    __typename
    titulo
    subtitulo
    link
    thumb
  }
}
    `;
export const QuizPartsFragmentDoc = gql`
    fragment QuizParts on Quiz {
  __typename
  titulo
  descricao
  opcoes {
    __typename
    texto
  }
  btnTexto
  btnLink
}
    `;
export const LivroPartsFragmentDoc = gql`
    fragment LivroParts on Livro {
  __typename
  titulo
  paragrafo1
  paragrafo2
  btn1Texto
  btn1Link
  btn2Texto
  btn2Link
}
    `;
export const FooterPartsFragmentDoc = gql`
    fragment FooterParts on Footer {
  __typename
  instagramLink
  youtubeLink
  contatoEmail
  lattesLink
  portfolioLink
  copyright
}
    `;
export const HeroDocument = gql`
    query hero($relativePath: String!) {
  hero(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HeroParts
  }
}
    ${HeroPartsFragmentDoc}`;
export const HeroConnectionDocument = gql`
    query heroConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HeroFilter) {
  heroConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HeroParts
      }
    }
  }
}
    ${HeroPartsFragmentDoc}`;
export const SobreDocument = gql`
    query sobre($relativePath: String!) {
  sobre(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SobreParts
  }
}
    ${SobrePartsFragmentDoc}`;
export const SobreConnectionDocument = gql`
    query sobreConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SobreFilter) {
  sobreConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SobreParts
      }
    }
  }
}
    ${SobrePartsFragmentDoc}`;
export const PremiosDocument = gql`
    query premios($relativePath: String!) {
  premios(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PremiosParts
  }
}
    ${PremiosPartsFragmentDoc}`;
export const PremiosConnectionDocument = gql`
    query premiosConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PremiosFilter) {
  premiosConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PremiosParts
      }
    }
  }
}
    ${PremiosPartsFragmentDoc}`;
export const ProjetosDocument = gql`
    query projetos($relativePath: String!) {
  projetos(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProjetosParts
  }
}
    ${ProjetosPartsFragmentDoc}`;
export const ProjetosConnectionDocument = gql`
    query projetosConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProjetosFilter) {
  projetosConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProjetosParts
      }
    }
  }
}
    ${ProjetosPartsFragmentDoc}`;
export const CursosDocument = gql`
    query cursos($relativePath: String!) {
  cursos(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CursosParts
  }
}
    ${CursosPartsFragmentDoc}`;
export const CursosConnectionDocument = gql`
    query cursosConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CursosFilter) {
  cursosConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CursosParts
      }
    }
  }
}
    ${CursosPartsFragmentDoc}`;
export const EngajamentoDocument = gql`
    query engajamento($relativePath: String!) {
  engajamento(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EngajamentoParts
  }
}
    ${EngajamentoPartsFragmentDoc}`;
export const EngajamentoConnectionDocument = gql`
    query engajamentoConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: EngajamentoFilter) {
  engajamentoConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EngajamentoParts
      }
    }
  }
}
    ${EngajamentoPartsFragmentDoc}`;
export const GaleriaDocument = gql`
    query galeria($relativePath: String!) {
  galeria(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GaleriaParts
  }
}
    ${GaleriaPartsFragmentDoc}`;
export const GaleriaConnectionDocument = gql`
    query galeriaConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GaleriaFilter) {
  galeriaConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GaleriaParts
      }
    }
  }
}
    ${GaleriaPartsFragmentDoc}`;
export const VideosDocument = gql`
    query videos($relativePath: String!) {
  videos(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...VideosParts
  }
}
    ${VideosPartsFragmentDoc}`;
export const VideosConnectionDocument = gql`
    query videosConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: VideosFilter) {
  videosConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...VideosParts
      }
    }
  }
}
    ${VideosPartsFragmentDoc}`;
export const QuizDocument = gql`
    query quiz($relativePath: String!) {
  quiz(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...QuizParts
  }
}
    ${QuizPartsFragmentDoc}`;
export const QuizConnectionDocument = gql`
    query quizConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: QuizFilter) {
  quizConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...QuizParts
      }
    }
  }
}
    ${QuizPartsFragmentDoc}`;
export const LivroDocument = gql`
    query livro($relativePath: String!) {
  livro(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...LivroParts
  }
}
    ${LivroPartsFragmentDoc}`;
export const LivroConnectionDocument = gql`
    query livroConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: LivroFilter) {
  livroConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...LivroParts
      }
    }
  }
}
    ${LivroPartsFragmentDoc}`;
export const FooterDocument = gql`
    query footer($relativePath: String!) {
  footer(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FooterParts
  }
}
    ${FooterPartsFragmentDoc}`;
export const FooterConnectionDocument = gql`
    query footerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FooterFilter) {
  footerConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FooterParts
      }
    }
  }
}
    ${FooterPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    hero(variables, options) {
      return requester(HeroDocument, variables, options);
    },
    heroConnection(variables, options) {
      return requester(HeroConnectionDocument, variables, options);
    },
    sobre(variables, options) {
      return requester(SobreDocument, variables, options);
    },
    sobreConnection(variables, options) {
      return requester(SobreConnectionDocument, variables, options);
    },
    premios(variables, options) {
      return requester(PremiosDocument, variables, options);
    },
    premiosConnection(variables, options) {
      return requester(PremiosConnectionDocument, variables, options);
    },
    projetos(variables, options) {
      return requester(ProjetosDocument, variables, options);
    },
    projetosConnection(variables, options) {
      return requester(ProjetosConnectionDocument, variables, options);
    },
    cursos(variables, options) {
      return requester(CursosDocument, variables, options);
    },
    cursosConnection(variables, options) {
      return requester(CursosConnectionDocument, variables, options);
    },
    engajamento(variables, options) {
      return requester(EngajamentoDocument, variables, options);
    },
    engajamentoConnection(variables, options) {
      return requester(EngajamentoConnectionDocument, variables, options);
    },
    galeria(variables, options) {
      return requester(GaleriaDocument, variables, options);
    },
    galeriaConnection(variables, options) {
      return requester(GaleriaConnectionDocument, variables, options);
    },
    videos(variables, options) {
      return requester(VideosDocument, variables, options);
    },
    videosConnection(variables, options) {
      return requester(VideosConnectionDocument, variables, options);
    },
    quiz(variables, options) {
      return requester(QuizDocument, variables, options);
    },
    quizConnection(variables, options) {
      return requester(QuizConnectionDocument, variables, options);
    },
    livro(variables, options) {
      return requester(LivroDocument, variables, options);
    },
    livroConnection(variables, options) {
      return requester(LivroConnectionDocument, variables, options);
    },
    footer(variables, options) {
      return requester(FooterDocument, variables, options);
    },
    footerConnection(variables, options) {
      return requester(FooterConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
