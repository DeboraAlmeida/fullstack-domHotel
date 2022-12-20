// Arquivo criado: 15/12/2022 às 20:49
import React from 'react'
import DescriptionParagraph from '../../components/atoms/DescriptionParagraph'
import ImageDefault from '../../components/atoms/ImageDefault'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import premio2 from './imgs/premio_2019.jpg'
import premio1 from './imgs/premio_2021.webp'
import img1 from './imgs/quem_somos.jpg'
import premio3 from './imgs/selo-turismo.png'
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
      <div className='-title'>
        <PrincipalTitle>Quem Somos</PrincipalTitle>
        <S.Line />
      </div>

      <div className='-mensagem'>
        <div className='-mensagem-img'>
          <ImageDefault
            src={img1}
            altText={'Quem somos'}
          />
        </div>
        <DescriptionParagraph
          className='-mensagem-text'
          msg={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint ea voluptas modi placeat ipsam accusamus doloremque illum nisi adipisci beatae officia, error, quibusdam omnis eius illo iste itaque at facere! Veritatis magnam dolorem saepe hic iusto in provident error officiis voluptatibus! Culpa labore animi assumenda nihil voluptatum omnis doloribus tenetur incidunt, suscipit maxime eveniet molestiae nesciunt velit? Repellendus mollitia distinctio dolores nemo dolore repudiandae eos consequuntur tempore, rerum expedita a. Cum animi commodi quia odio dolorum sed ut accusamus sunt perferendis!'}
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
