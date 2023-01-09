import React from 'react'
import Button from '../../atoms/Button/index.js'
import ImageDefault from '../../atoms/ImageDefault/index.js'
import MiniTitle from '../../atoms/MiniTitle/index.js'
import SubTitle from '../../atoms/SubTitle/index.js'
import CommentArea from '../CommentArea/index.js'
import * as S from './style.js'

const AvaliationRoom = ({ content, setStage }) => {
  const handleButton = () => {
    setStage('avaliation')
  }

  return (
    <S.Wrapper>
      <S.TitleContainer>
        <SubTitle>{content.title}</SubTitle>
      </S.TitleContainer>
      <S.ImageContainer>
        <ImageDefault src={content.src} altText={content.alt} />
      </S.ImageContainer>
      <MiniTitle span={'Descrição: '} text={content.description} />
      {content.usersComment.length > 0 && (
        <>
          <S.TitleCommentContainer>
          <MiniTitle span={'Comentários'}/>
        </S.TitleCommentContainer> 
          <S.CommentContainer>
          {content.usersComment.map((user, index) => (
            <CommentArea key={index} name={user.name} comment={user.comment} star={user.star} />
          ))}        
        </S.CommentContainer>
      </>
      )}          
      <S.ButtonContainer>
        <Button action={handleButton}>{'Avaliar quarto'}</Button>
      </S.ButtonContainer>
    </S.Wrapper>
  )
}

export default AvaliationRoom