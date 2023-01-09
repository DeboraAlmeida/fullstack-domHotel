import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Button from '../../atoms/Button'
import GenericInput from '../../atoms/GenericInput'
import GenericLabel from '../../atoms/GenericLabel'
import SubTitle from '../../atoms/SubTitle'
import TextArea from '../../atoms/TextArea'
import * as S from './styles.js'

const AvaliationArea = () => {
  const [stars, setStars] = useState(['void', 'void', 'void', 'void', 'void'])

  const handleStars = (index) => {
    const position = index
    const result = stars.map((star, index) => {
      if (index < (position + 1)) {
        return 'marked'
      } else {
        return 'void'
      }
    })
    setStars(result)
  }
  
  return (
    <S.Wrapper>
      <S.TitleContainer id={'title-container'}>
        <SubTitle>{'Avalie'}</SubTitle>
      </S.TitleContainer>      
      <GenericLabel id={'name'}>Nome:</GenericLabel>   
      <GenericInput type={'text'} id={'name'} aName={'name'} />
      <GenericLabel id={'comment'}>Comentário:</GenericLabel>   
      <TextArea />
      <S.StarsContainer>
        {stars.map((star, index) => {
          if (star === 'void') {
            return <AiOutlineStar key={index} onClick={() => handleStars(index)}/>
          } else {
            return <AiFillStar key={index} onClick={() => handleStars(index)}/>
          }
        })}
      </S.StarsContainer>
      <Button>{'Avaliar'}</Button>
    </S.Wrapper>
  )
}

export default AvaliationArea