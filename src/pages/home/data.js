import coz4 from './images/coz4.jpg'
import quarto1 from './images/quarto1.jpg'
import quarto2 from './images/quarto2.jpg'
import quarto3 from './images/quarto3.jpg'

export const content = {
  section1: {
    title: 'Conheça nosso Hotel',
    description: 'Sejam bem vindos ao Dom Hotel, o local feito para você apreciar todo o luxo, conforto e lazer que podemos oferecer. Localizados no estado de São Paulo, nosso ambiente é composto por suítes premiadas, que oferecem o que tem de melhor em charme e sofisticação. Aqui você encontra o lugar ideal para passar uma noite ou as férias inteiras. Com uma explêndida área de lazer, contamos com 3 piscinas, todas aquecidas,com ilhas especiais para aproveitar aquele drink ou uma bela refeição e um espaço especial para os pequenos, com a charmosa piscina infantil. Temos ainda a nossa jacuzzi para uso dos hospedes, área de churrasco para eventos com os amigos, salão de festas para os eventos sociais mais esperados, academia, sala de jogos, quadra de tênis, quadra de futebol e voleibol e sauna. Além de tudo isso, nossa diversidade gastronômica une o que há de melhor na cozinha brasileira com os pratos mais famosos ao redor do mundo! Uma explosão de cultura e sabor para o seu paladar',
    imageCollection: [
      {
        src: quarto1
      },
      {
        src: quarto2
      },
      {
        src: quarto3
      }
    ] 
  },
  section2: {
    title: 'Nossas Acomodações',
    description: 'Premiadas por seu design individual e moderno nossas suítes foram pensadas para o seu conforto! São 3 opções de acomodações variadas, para você se sentir especial. Contamos com banheiros amplos, camas super cofortáveis, opções de quartos duplos e triplos, Wi-fi e escrivaninha, tvs com os melhores streamings e um serviço de quarto eficiente, garantindo uma estadia segura e empolgante',
    link: 'Conheça mais sobre nossos serviços!',
    path: '/acomodacoes'
  },
  section3: {
    title: 'Gastronomia',
    description1: 'Adeptos da Nova Gastronomia Brasileira, nossos chefs são responsáveis por criar pratos valorizando os ingredientes locais, com as técnicas já conhecidas pelas cozinhas do mundo inteiro. Essa valorização da nossa culinária faz com que os chefs do Dom Hotel entreguem uma nova experiência aos amantes da boa comida. Aqui você vai experimentar variações originais do conhecido Churrasco Gaúcho, passando pelo Acarajé Baiano, Vatapá Paraense e a variedade saborosa da Pizza Paulista. Esses e outros pratos conhecidos com um toque especial e profissional vão levar você a uma experiência enriquecedora.',
    description2: 'Cardápios variados com opções de entrada, saladas, pratos principais e sobremesas maravilhosas. Nossa carta de vinhos irá te impressionar! Um trabalho feito com carinho e muita pesquisa harmoniza nossos pratos com os melhores títulos de cada temporada. E não para por aí! Temos ainda jantares temáticos que farão da sua estadia uma lembrança mais que agradável',
    image: {
      src: coz4
    }
  }
}