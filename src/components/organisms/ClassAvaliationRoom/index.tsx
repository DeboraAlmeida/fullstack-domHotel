// Arquivo criado: 01/12/2022 às 19:20

import { Comment } from '@/interfaces/Comment';
import { Content } from '@/interfaces/Content';
import React from 'react';
import Button from '../../atoms/Button/';
import ImageDefault from '../../atoms/ImageDefault/index.js';
import MiniTitle from '../../atoms/MiniTitle/index.js';
import SubTitle from '../../atoms/SubTitle/index.js';
import CommentArea from '../CommentArea/index.js';
import * as S from './styles';


interface Props {
  content: Content
  setStage: React.Dispatch<React.SetStateAction<string>>
  comments: Comment[]
}


export default class ClassAvaliationRoom extends React.Component<Props> {

  content: Content
  setStage: React.Dispatch<React.SetStateAction<string>>

  state = {
    comments: []
  }

  
  constructor(props: Props) {
    super(props)
    this.content = props.content
    this.setStage = props.setStage
  }

  componentDidMount(): void {
    const hasComments: string | null = localStorage.getItem('comments')
    const localComments = hasComments ? JSON.parse(hasComments) : []

    const arr: Comment[] = []
    localComments.forEach((comment: Comment) => {
      if (comment.quartoId === this.content.id) {
        arr.push(comment)
      }
    })
    this.setState({ 
      comments: arr
    })
  }

  handleButton = () => {
    this.setStage('avaliation')
  }

  render(): JSX.Element {
    return (
      <S.Wrapper>
        <S.TitleContainer id='title-container'>
          <SubTitle>{this.content.title}</SubTitle>
        </S.TitleContainer>
        <S.ImageContainer>
          <ImageDefault src={this.content.src} altText={this.content.alt} />
        </S.ImageContainer>
        <MiniTitle span={'Descrição: '} text={this.content.description} />
        {this.state.comments.length > 0 && (
          <>
            <S.TitleCommentContainer>
              <MiniTitle span={'Comentários'} />
            </S.TitleCommentContainer>
            <S.CommentContainer>
              {this.state.comments.map((user: Comment, index: number) => (
                <CommentArea key={index} name={user.name} comment={user.comment} star={user.stars} />
              ))}
            </S.CommentContainer>
          </>
        )}
        <S.ButtonContainer>
          <Button action={this.handleButton}>Avaliar quarto</Button>
        </S.ButtonContainer>
      </S.Wrapper>
    )
  }

}
