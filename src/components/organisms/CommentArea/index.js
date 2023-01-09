import React from 'react'
import DescriptionParagraph from '../../atoms/DescriptionParagraph'
import Stars from '../../atoms/Stars'
import SubTitle from '../../atoms/SubTitle'
import * as S from './styles.js'

const CommentArea = ({ name, star, comment }) => {
  return (
    <S.Wrapper>
      <S.NameContainer>
        <SubTitle>{name}</SubTitle>
        <Stars level={star} />
      </S.NameContainer>
      <DescriptionParagraph msg={comment}/>
    </S.Wrapper>
  )
}

export default CommentArea