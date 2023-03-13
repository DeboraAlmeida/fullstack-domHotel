import DescriptionParagraph from 'components/atoms/DescriptionParagraph'
import Stars from 'components/atoms/Stars'
import SubTitle from 'components/atoms/SubTitle'
import React from 'react'
import * as S from './styles'

interface Props {
  name: string
  star?: number
  comment: string | JSX.Element
  button?: JSX.Element
  onClick?: () => void
}

const CommentArea = ({ name, star, comment, button, onClick }: Props) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.NameContainer>
        <SubTitle>{name}</SubTitle>
        {star ? <Stars level={star} /> : button}
      </S.NameContainer>
      <DescriptionParagraph msg={comment} />
    </S.Wrapper>
  )
}

export default CommentArea