import React, { useState } from 'react'
import * as S from './styles.js'

import MiniTitle from '../../atoms/MiniTitle/index.js'
import PrincipalTitle from '../../atoms/PrincipalTitle/index.js'
import Anchor from '../../atoms/Anchor/index.js'
import ImageDefault from '../../atoms/ImageDefault/index.js'
import DescriptionParagraph from '../../atoms/DescriptionParagraph/index.js'
import TextArea from '../../atoms/TextArea/index.js'
import Button from '../../atoms/Button/index.js'
import Dropboximage from '../DropboxImage/index.js'

import Carrousel from '../Carrousel/index.js'

import GenericInput from '../../atoms/GenericInput/index.js'
import SubTitle from '../../atoms/SubTitle/index.js'
import UnorderedList from '../../atoms/UnorderedList/index.js'



const ComponentsArea = () => {
  const miniTitleCollection = [{ price: '150,00' }, { price: '250,00' }, { price: '350,00' }]
  const imageColletion = [{ id: 1, url: 'https://img.freepik.com/premium-vector/cute-koala-hanging-tree-with-cub-cartoon_346903-877.jpg?w=200' }, { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLWy7WPxUezxRDww85wVzeLbUxbF5f101qKdB6KnPCOs9YXLZHsxqqh32qWew_fVLf4s&usqp=CAU' }]
  const [inputsData] = useState([
    {
      type: 'text',
      placeholder: 'Digite seu nome'
    },
    {
      type: 'number',
      placeholder: '1'
    },
    {
      type: 'password',
      placeholder: 'Digite sua senha'
    }

  ])

  return (
    <S.Wrapper>
      <PrincipalTitle>Página de Components</PrincipalTitle>
      <SubTitle>Subtitle aqui!</SubTitle>
      {miniTitleCollection.map((item, index) => (
        <MiniTitle key={index} span="R$ " text={item.price} />
      ))}
      <Anchor href='/' target='_blank' msg='ancora' />
      <S.ImageContainer>
        {imageColletion.map(image => (
          <ImageDefault key={image.id} src={image.url} />
        ))}
      </S.ImageContainer>
      <DescriptionParagraph msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' />

      <S.formContainer>
        <TextArea width='300px' placeholder='Digite Aqui' autoFocus />

        {inputsData.map((element, index) => (
          <GenericInput key={index} type={element.type} placeholder={element.placeholder} />
        ))}
        <Button>ENVIAR</Button>
      </S.formContainer>

      <S.DropboxContainer>
        <Dropboximage srcImage={<ImageDefault src={'https://cdn-icons-png.flaticon.com/512/2985/2985150.png'} />}>
          Descrição do DropBox
        </Dropboximage>
      </S.DropboxContainer>

      <S.CarrouselContainer>
        <Carrousel img1={'https://img.freepik.com/vetores-premium/desenho-animado-da-xicara-de-cha-com-bolha-de-coala-bonito-coala_138676-2079.jpg?w=2000'} img2={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4v4G9uFz9DUNZlqSDgAro5vbaXT2luk5U1GhQWUOF_12GzAoCF-nVRhSYRVT2upXo2NQ&usqp=CAU'} img3={'https://img.freepik.com/vetores-premium/desenho-animado-da-xicara-de-cha-com-bolha-de-coala-bonito-coala_138676-2079.jpg?w=2000'} img4={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4v4G9uFz9DUNZlqSDgAro5vbaXT2luk5U1GhQWUOF_12GzAoCF-nVRhSYRVT2upXo2NQ&usqp=CAU'} altText={'LegendImage'}>
        </Carrousel>
      </S.CarrouselContainer>

      <UnorderedList arr={['Christian', 'Debora', 'Flaviano', 'Larissa']} />
    </S.Wrapper>
  )
}


export default ComponentsArea