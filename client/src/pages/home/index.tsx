// Arquivo criado: 15/12/2022 às 20:47
import Banner from 'components/organisms/Banner'
import { Content } from 'interfaces/Content'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Anchor from '../../components/atoms/Anchor'
import DescriptionParagraph from '../../components/atoms/DescriptionParagraph'
import ImageDefault from '../../components/atoms/ImageDefault'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import SubTitle from '../../components/atoms/SubTitle'
import imgBanner from '../../components/organisms/Banner/images/banner.webp'
import ModalAvaliationRoom from '../../components/organisms/ModalAvaliationRoom'
import { content } from './data'
import * as S from './styles'

const Home = () => {

  const [showModal, setShowModal] = useState(false)
  const [actualImage, setActualImage] = useState<Content>({
    title: '',
    src: '',
    alt: '',
    description: '',
    id: 0
  })

  // passei como any porq tem um campo em especifico com outro nome.
  const handleShowComments = (img: any) => {
    setShowModal(true)
    setActualImage({
      ...img,
      description: img.titleDescription
    })
  }

  return (
    <>
      <Helmet>
        <title>DOM Hotel - Home</title>
        <meta name='description' content='DOM Hotel - Inicio' />
      </Helmet>
      <S.Wrapper>
        <PrincipalTitle>{content.section1.title}</PrincipalTitle>
        <Banner/>
        <ImageDefault src={imgBanner}></ImageDefault>
        <DescriptionParagraph msg={content.section1.description} />
        <SubTitle>{content.section2.title}</SubTitle>
        <S.AccommodationContainer>
          <S.ImageContainer>
            {content.section1.imageCollection.map((img, index) => (
              <ImageDefault onClick={() => handleShowComments(img)} key={index} src={img.src} />
            ))}
          </S.ImageContainer>
          <DescriptionParagraph msg={content.section2.description} />
          <Anchor msg={content.section2.link} href={content.section2.path} />
        </S.AccommodationContainer>
        <S.GastronomyContainer>
          <S.GastronomyDescription>
            <SubTitle>{content.section3.title}</SubTitle>
            <DescriptionParagraph msg={content.section3.description1} />
            <DescriptionParagraph msg={content.section3.description2} />
          </S.GastronomyDescription>
          <S.GastronomyImage>
            <ImageDefault src={content.section3.image.src} />
          </S.GastronomyImage>
        </S.GastronomyContainer>
      </S.Wrapper>

      <ModalAvaliationRoom
        showModal={showModal}
        setShowModal={setShowModal}
        actualImage={actualImage}
      />
    </>
  )
}

export default Home
