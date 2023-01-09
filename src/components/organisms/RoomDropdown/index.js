import React, { useEffect, useState } from 'react'
import ImageDefault from '../../atoms/ImageDefault/index.js'
import MiniTitle from '../../atoms/MiniTitle/index.js'
import Modal from '../../atoms/Modal/index.js'
import AvaliationArea from '../AvaliationArea/index.js'
import AvaliationRoom from '../AvaliationRoom/index.js'
import * as S from './styles.js'

const RoomDropdown = ({ title, imgCollection }) => {
  const [showModal, setShowModal] = useState(false)
  const [stage, setStage] = useState('comment')

  const [actualImage, setActualImage] = useState({
    title: '',
    src: '',
    alt: '',
    description: '',
    usersComment: [
      {
        name: 'Christian',
        comment: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        star: 5
      },
      {
        name: 'Larissa',
        comment: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        star: 5
      },
      {
        name: 'Débora',
        comment: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        star: 2
      },
      {
        name: 'Flaviano',
        comment: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        star: 3
      }
    ]
  })

  useEffect(() => {
    if (!showModal) {
      setStage('comment')
    }
  }, [showModal])

  const handleImage = (img) => {
    setActualImage(prev => ({ ...prev, title: img.title, src: img.src, alt: img.alt, description: img.titleDescription }))
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
          <AvaliationRoom content={actualImage} setStage={setStage}/> 
        )}
        {stage === 'avaliation' && (
          <AvaliationArea />
        )}   
      </Modal>
    </S.Wrapper>
  )
}

export default RoomDropdown