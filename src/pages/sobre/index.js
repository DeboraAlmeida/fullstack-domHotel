// Arquivo criado: 15/12/2022 às 20:49
import React from 'react'
import DescriptionParagraph from '../../components/atoms/DescriptionParagraph'
import ImageDefault from '../../components/atoms/ImageDefault'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import premio2 from './imgs/premio_2019.webp'
import premio1 from './imgs/premio_2021.webp'
import img1 from './imgs/quem_somos.webp'
import premio3 from './imgs/selo-turismo.webp'
import * as S from './styles'


export const Sobre = () => {

  const premios = [
    {
      img: premio1,
      alt: 'Prêmio 2021'
    },
    {
      img: premio2,
      alt: 'Prêmio 2019'
    },
    {
      img: premio3,
      alt: 'Selo de Turismo'
    }
  ]

  return (
    <S.Container>
      <PrincipalTitle>Quem Somos</PrincipalTitle>
      <div className='-mensagem'>
        <div className='-mensagem-img'>
          <ImageDefault
            src={img1}
            altText={'Quem somos'}
          />
        </div>
        <DescriptionParagraph
          className='-mensagem-text'
          msg={'O Dom Hotel foi criado para oferecer o que há de melhor em conforto, modernidade e entretenimento. Construído com estética autosustentável, possuímos coleta seletiva, reaproveitamento de água e placas de energia solar, e uma área verde com espécies nativas. Nossos quartos tem nomes inspirados nos pássaros mais conhecidos da região e com decorações únicas que mantém o conceito multicultural. Com uma equipe de profissionais de excelência, nossos serviços são pensados para que nossos hóspedes desfrutem de luxo, sofisticação e praticidade. Nossos hóspedes podem optar por uma gastronomia rica e diversa e as melhores opções de café da manhã das 6h às 10:30h! Estamos localizados perto dos principais pontos turísticos, restaurantes e feiras da cidade. Possuímos transfer do aeroporto.'}
        />
      </div>

      <div className='-premios'>
        <div className='-premios-title'>
          <SubTitle>Nossos resultados</SubTitle>
        </div>

        <div className='-premios-contentImgs'>
          {
            premios.map(premio => (
              <div key={premio.alt} className='-premios-contentImgs-imgSingle'>
                <ImageDefault
                  src={premio.img}
                  altText={premio.alt}
                />
              </div>
            ))
          }
        </div>
      </div>
    </S.Container>
  )

}

export default Sobre
