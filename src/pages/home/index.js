// Arquivo criado: 15/12/2022 às 20:47
import React from 'react'
import '../../App.css'
import DescriptionParagraph from '../../components/atoms/DescriptionParagraph'
import ImageDefault from '../../components/atoms/ImageDefault'
import MiniTitle from '../../components/atoms/MiniTitle'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import coz4 from './images/coz4.jpg'
import quarto1 from './images/quarto1.jpg'
import quarto2 from './images/quarto2.jpg'
import quarto3 from './images/quarto3.jpg'
import * as S from './styles'

export const Home = () => {

  return (
    <div className='App'>
      <body className='PageTitle'>
        <div className = 'Title'>
          <PrincipalTitle> Conheça nosso Hotel </PrincipalTitle>
        </div>
        <S.PText><DescriptionParagraph msg="Sejam bem vindos ao Dom Hotel, o local feito para você apreciar todo o luxo, conforto e lazer que podemos oferecer. Localizados no estado de São Paulo, nosso ambiente é composto por suítes premiadas, que oferecem o que tem de melhor em charme e sofisticação. Aqui você encontra o lugar ideal para passar uma noite ou as férias inteiras. Com uma explêndida área de lazer, contamos com 3 piscinas, todas aquecidas,com ilhas especiais para aproveitar aquele drink ou uma bela refeição e um espaço especial para os pequenos, com a charmosa piscina infantil. Temos ainda a nossa jacuzzi para uso dos hospedes, área de churrasco para eventos com os amigos, salão de festas para os eventos sociais mais esperados, academia, sala de jogos, quadra de tênis, quadra de futebol e voleibol e sauna. Além de tudo isso, nossa diversidade gastronômica une o que há de melhor na cozinha brasileira com os pratos mais famosos ao redor do mundo! Uma explosão de cultura e sabor para o seu paladar" /></S.PText>
        <SubTitle>Nossas Acomodações</SubTitle>
        <S.ImageHome>
        <ImageDefault src={quarto1}/>
        <ImageDefault src={quarto2}/>
        <ImageDefault src={quarto3}/>
        </S.ImageHome>
        <S.PText><DescriptionParagraph msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil laudantium accusantium exercitationem dicta totam quidem? Doloribus obcaecati eaque mollitia illum unde, ducimus autem soluta in. Iste, consectetur totam consequatur, ipsa recusandae, qui possimus sed ad omnis illum voluptate minima porro itaque debitis asperiores? Dolorem ea accusamus at odio quas!"/></S.PText>
        <MiniTitle>Conheça mais sobre nossos serviços</MiniTitle>
        <SubTitle>Gastronomia</SubTitle> 
        <S.ContainerCarrosel>    
          <DescriptionParagraph msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet repellendus temporibus, maiores facere assumenda dignissimos officia? Mollitia rem ut inventore in sint dolorem, voluptate molestias, cupiditate alias ad doloribus earum laborum pariatur ipsam magnam nihil temporibus. Excepturi eos ipsa voluptatibus deleniti, atque magnam porro numquam id. Laborum accusamus consequuntur ullam vitae! Quibusdam neque laudantium blanditiis architecto earum iusto! Dolorum quas vel, ut eius mollitia itaque fugit perferendis est dolorem maiores nisi eveniet dolores commodi, dolore quisquam, cum nostrum facere culpa iste exercitationem harum odit facilis delectus deserunt? Porro dolore provident commodi magnam, recusandae temporibus delectus non beatae aliquam facilis
Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet repellendus temporibus, maiores facere assumenda dignissimos officia? Mollitia rem ut inventore in sint dolorem, voluptate molestias, cupiditate alias ad doloribus earum laborum pariatur ipsam magnam nihil temporibus. Excepturi eos ipsa voluptatibus deleniti, atque magnam porro numquam id. Laborum accusamus consequuntur ullam vitae! Quibusdam neque laudantium blanditiis architecto earum iusto! Dolorum quas vel, ut eius mollitia itaque fugit perferendis est dolorem maiores nisi eveniet dolores commodi, dolore quisquam, cum nostrum facere culpa iste exercitationem harum odit facilis delectus deserunt? Porro dolore provident commodi magnam, recusandae temporibus delectus non beatae aliquam facilis?"/>
          <S.CarrouselDiv><ImageDefault src={coz4}/></S.CarrouselDiv>
        </S.ContainerCarrosel>
      </body>
    </div>
  )

}

export default Home
