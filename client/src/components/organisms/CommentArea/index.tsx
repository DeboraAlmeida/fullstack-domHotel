import React from 'react'
import DescriptionParagraph from '../../atoms/DescriptionParagraph'
import Stars from '../../atoms/Stars'
import SubTitle from '../../atoms/SubTitle'
import * as S from './styles'

interface Props {
  name: string
  star: number
  comment: string
}

const CommentArea = ({ name, star, comment }: Props) => {
  return (
    <S.Wrapper>
      <S.NameContainer>
        <SubTitle>{name}</SubTitle>
        <Stars level={star} />
      </S.NameContainer>
      <DescriptionParagraph msg={comment} />
    </S.Wrapper>
  )
}

export default CommentArea