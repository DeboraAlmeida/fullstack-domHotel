import { Content } from '@/interfaces/Content'
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import backEnd from '../../../utils/backEnd'
import Button from '../../atoms/Button'
import GenericInput from '../../atoms/GenericInput'
import GenericLabel from '../../atoms/GenericLabel'
import SubTitle from '../../atoms/SubTitle'
import TextArea from '../../atoms/TextArea'
import * as S from './styles.js'

interface Props {
  content: Content
}

interface Login {
  email: string
  password: string
}

export default class AvaliationArea extends React.Component<Props> {
  
  content: Content

  state = {
    stars: ['void', 'void', 'void', 'void', 'void'],
    form: {
      show: false,
      title: 'Carregando...',
      msg: ''
    },
    buttonInfo: {
      name: 'Avaliar',
      disabled: false
    }
  }

  constructor(props: Props) {
    super(props)
    this.content = props.content
  }

  componentDidMount(): void {

    const handleCanComment = () => {
      backEnd(`/verify-can-comment/${this.content.id}`,'GET',true).then(res => {
        if(res.canComment){
          this.setState({
            form: {
              show: true,
              title: '',
              msg: ''
            },
          })
          return
        }

        this.setState({
          form: {
            show: false,
            title: 'Avaliação bloqueada',
            msg: 'É preciso ja ter feito check-in neste quarto para o avaliar'
          },
        })
      })
      
    }

    const handleNameUser = () => {
      if (this.handleLogged()) {
        const isLogged: string | null = sessionStorage.getItem('isLogged')
        if(isLogged){
          const nome = JSON.parse(isLogged).name
          if (nome !== '') {
            const nomeInput = document.getElementById('name') as HTMLInputElement
            if (nomeInput) nomeInput.value = nome
          }
        }
      }
    }

    handleNameUser()
    handleCanComment()
  }
  

  handleLogged = (): boolean => {
    
    if (sessionStorage.getItem('isLogged')) {
      return true
    } 
    
    this.setState({
      buttonInfo: {
        name: 'Faça login para avaliar',
        disabled: true
      }
    })
    return false
  }


  handleStars = (index: number) => {
    const position = index
    const result = this.state.stars.map((_star: string, index: number) => {
      if (index < (position + 1)) {
        return 'marked'
      } else {
        return 'void'
      }
    })
    
    this.setState({
      stars: result
    })
  }

  handleForm = (): void => {
    const name = document.getElementById('name') as HTMLInputElement
    const msg = document.getElementById('comment') as HTMLTextAreaElement

    const feedBack = (msg: string) => {
     this.setState({
        buttonInfo: {
          name: msg,
          disabled: true
        }
     })

      setTimeout(() => {
        this.setState({
          buttonInfo: {
            name: 'Avaliar',
            disabled: false
          }
        })
      }, 2000)
    }

    const savingComment = (): void => {
      const hasComments: string | null = localStorage.getItem('comments')
      const comments = hasComments ? JSON.parse(hasComments) : []

      const comment = {
        quartoId: this.content.id,
        name: name.value,
        comment: msg.value,
        stars: this.state.stars.filter((star: string) => star === 'marked').length
      }

      comments.push(comment)
      localStorage.setItem('comments', JSON.stringify(comments))
      this.setState({
        form: {
          show: false,
          title: 'Avaliação enviada!',
          msg: 'DOM Hotel agradece sua avaliação.'
        }
      })
    }

    if (!this.handleLogged()) {
      return
    }

    if (!this.state.stars.find(star => star !== 'void')) {
      feedBack('Preencha as Estrelas')
      return 
    }

    if (name.value === '') {
      feedBack('Informe seu Nome')
      return
    }

    if (name.value.length > 30) {
      feedBack('Nome muito grande')
      return
    } 

    if (msg.value.length > 250) {
      feedBack('Mensagem muito grande')
      return
    } 
    
    savingComment()

  }
  
  render(): JSX.Element {
    return (
      <S.Wrapper>
        {
          this.state.form.show
            ? (
              <>
                <S.TitleContainer id={'title-container'}>
                  <SubTitle>{'Avalie'}</SubTitle>
                </S.TitleContainer>
                <GenericLabel id={'name'}>Nome:</GenericLabel>
                <GenericInput type={'text'} id={'name'} aName={'name'} />
                <GenericLabel id={'comment'}>Comentário:</GenericLabel>
                <TextArea id={'comment'} />
                <S.StarsContainer>
                  {this.state.stars.map((star, index) => {
                    if (star === 'void') {
                      return <AiOutlineStar key={index} onClick={() => this.handleStars(index)} />
                    } else {
                      return <AiFillStar key={index} onClick={() => this.handleStars(index)} />
                    }
                  })}
                </S.StarsContainer>
                <Button disabled={this.state.buttonInfo.disabled} action={this.handleForm}>{this.state.buttonInfo.name}</Button>
              </>
            )
            : (
              <>
                <S.TitleContainer id={'title-container'}>
                  <SubTitle>{this.state.form.title}</SubTitle>
                </S.TitleContainer>
                <S.subMsgSuccess>{this.state.form.msg}</S.subMsgSuccess>
              </>
            )
        }
      </S.Wrapper>
    )
  }
 
}
