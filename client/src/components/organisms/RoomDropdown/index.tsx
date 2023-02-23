import React, { useEffect, useState } from 'react'
import ImageDefault from '../../atoms/ImageDefault'
import MiniTitle from '../../atoms/MiniTitle'
import Modal from '../../atoms/Modal'
import AvaliationArea from '../AvaliationArea'
import ClassAvaliationRoom from '../ClassAvaliationRoom'
import * as S from './styles'

interface Props {
  title: string
  imgCollection: Image[]
}

interface Image {
  title: string
  src: string
  alt: string
  titleDescription: string
  id: string
}

const RoomDropdown = ({ title, imgCollection }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [stage, setStage] = useState('comment')

  const [actualImage, setActualImage] = useState({
    title: '',
    src: '',
    alt: '',
    description: ''
  })

  useEffect(() => {
    if (!showModal) {
      setStage('comment')
    }
  }, [showModal])

  const handleImage = (img: Image) => {
    setActualImage(prev => ({ ...prev, title: img.title, src: img.src, alt: img.alt, description: img.titleDescription, id: img.id }))
    setShowModal(true)
  }

  return (
    <S.Wrapper>
      <MiniTitle span={title}/>
      <S.ImagesContainer>
        {imgCollection.map((img, index) => (
          <div key={index} onClick={() => handleImage(img)}>
            <ImageDefault src={img.src} altText={img.alt}/>      
          </div>         
        ))}
      </S.ImagesContainer>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        {stage === 'comment' && (
          <ClassAvaliationRoom content={actualImage} setStage={setStage} />
        )}
        {stage === 'avaliation' && (
          <AvaliationArea content={actualImage} />
        )}   
      </Modal>
    </S.Wrapper>
  )
}

export default RoomDropdown