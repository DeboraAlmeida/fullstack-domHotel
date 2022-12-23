// Arquivo criado: 15/12/2022 às 20:47
import React from 'react'
import Anchor from '../../components/atoms/Anchor'
import DescriptionParagraph from '../../components/atoms/DescriptionParagraph'
import ImageDefault from '../../components/atoms/ImageDefault'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import { content } from './data'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Wrapper>
        <PrincipalTitle>{content.section1.title}</PrincipalTitle>
        <DescriptionParagraph msg={content.section1.description} />
        <SubTitle>{content.section2.title}</SubTitle>
        <S.AccommodationContainer>
          <S.ImageContainer>
            {content.section1.imageCollection.map((img, index) => (
              <ImageDefault key={index} src={img.src}/>
            ))}
          </S.ImageContainer>
          <DescriptionParagraph msg={content.section2.description}/>
          <Anchor msg={content.section2.link} href={content.section2.path}/>
        </S.AccommodationContainer>
        <S.GastronomyContainer>   
          <S.GastronomyDescription>
            <SubTitle>{content.section3.title}</SubTitle> 
            <DescriptionParagraph msg={content.section3.description1}/>   
            <DescriptionParagraph msg={content.section3.description2}/>          
          </S.GastronomyDescription> 
          <S.GastronomyImage>
            <ImageDefault src={content.section3.image.src}/>
          </S.GastronomyImage>
        </S.GastronomyContainer>
    </S.Wrapper>
  )
}

export default Home
