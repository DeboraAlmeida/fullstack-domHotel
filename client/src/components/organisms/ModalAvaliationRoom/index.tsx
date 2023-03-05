// Arquivo criado: 04/03/2023 às 16:53
import { Content } from 'interfaces/Content'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Modal from '../../../components/atoms/Modal'
import AvaliationArea from '../AvaliationArea'
import ClassAvaliationRoom from '../ClassAvaliationRoom'
import * as S from './styles'

interface Props {
  actualImage: Content
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>

}

const ModalAvaliationRoom = ({ actualImage, showModal, setShowModal }: Props) => {

  const [stage, setStage] = useState('comment')

  useEffect(() => {
    if(showModal){
      setStage('comment')
    }
  },[showModal])

  return (
    <S.Container>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        {stage === 'comment' && (
          <ClassAvaliationRoom content={actualImage} setStage={setStage} />
        )}
        {stage === 'avaliation' && (
          <AvaliationArea content={actualImage} />
        )}
      </Modal>
    </S.Container>
  )

}

export default ModalAvaliationRoom
