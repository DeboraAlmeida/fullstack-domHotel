import React from 'react'
import DescriptionParagraph from '../../atoms/DescriptionParagraph'
import Stars from '../../atoms/Stars'
import SubTitle from '../../atoms/SubTitle'
import * as S from './styles'

interface Props {
  name: string
  star?: number
  comment: string | JSX.Element
  button?: JSX.Element
}

const CommentArea = ({ name, star, comment, button }: Props) => {
  return (
    <S.Wrapper>
      <S.NameContainer>
        <SubTitle>{name}</SubTitle>
        {star ? <Stars level={star} /> : button}
      </S.NameContainer>
      <DescriptionParagraph msg={comment} />
    </S.Wrapper>
  )
}

export default CommentArea