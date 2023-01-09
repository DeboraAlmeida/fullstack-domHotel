import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Button from '../../atoms/Button'
import GenericInput from '../../atoms/GenericInput'
import GenericLabel from '../../atoms/GenericLabel'
import SubTitle from '../../atoms/SubTitle'
import TextArea from '../../atoms/TextArea'
import * as S from './styles.js'

const AvaliationArea = ({ content }) => {
  const [stars, setStars] = useState(['void', 'void', 'void', 'void', 'void'])
  const [form, setForm] = useState(true)
  const [buttonInfo, setButtonInfo] = useState({
    name: 'Avaliar',
    disabled: false
  })

  useEffect(() => {
    const handleNameUser = () => {
      if (handleLogged()) {
        const nome = JSON.parse(sessionStorage.getItem('isLogged')).name
        if (nome !== '') {
          document.getElementById('name').value = nome
        }
      }
    }
    handleNameUser()
  }, [])
  

  const handleLogged = () => {
    
    if (sessionStorage.getItem('isLogged') !== null) {
      const local = localStorage.getItem('logins') === null ? [] : JSON.parse(localStorage.getItem('logins'))

      const logged = JSON.parse(sessionStorage.getItem('isLogged'))

      if (local.find(logins => logins.email === logged.email && logins.password === logged.password)) {
        return true
      } else {
        setButtonInfo({
          name: 'Faça login para avaliar',
          disabled: true
        })
        return false
      }

    } else {
      setButtonInfo({
        name: 'Faça login para avaliar',
        disabled: true
      })
      return false
    }
  }


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

  const handleForm = () => {
    const name = document.getElementById('name').value
    const msg = document.getElementById('comment').value

    const feedBack = (msg) => {
      setButtonInfo({
        name: msg,
        disabled: true
      })

      setTimeout(() => {
        setButtonInfo({
          name: 'Avaliar',
          disabled: false
        })
      }, 2000)
    }

    const savingComment = () => {
      const comments = localStorage.getItem('comments') === null ? [] : JSON.parse(localStorage.getItem('comments'))
      const comment = {
        quartoId: content.id,
        name,
        comment: msg,
        stars: stars.filter(star => star === 'marked').length
      }
      comments.push(comment)
      localStorage.setItem('comments', JSON.stringify(comments))
      setForm(false)
    }

    if (handleLogged()) {
      if (stars.find(star => star !== 'void')) {
        if (name !== '') {
          if (msg.length < 250) {
            savingComment()
          } else {
            feedBack('Mensagem muito grande')
          }
        } else {
          feedBack('Informe seu Nome')
        }
      } else {
        feedBack('Preencha as Estrelas')
      }
    }
  }
  
  return (
    <S.Wrapper>
     {
        form
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
              {stars.map((star, index) => {
                if (star === 'void') {
                  return <AiOutlineStar key={index} onClick={() => handleStars(index)}/>
                } else {
                  return <AiFillStar key={index} onClick={() => handleStars(index)}/>
                }
              })}
            </S.StarsContainer>
            <Button disabled={buttonInfo.disabled} action={handleForm}>{buttonInfo.name}</Button>
          </>
            )
          : (
           <>
              <S.TitleContainer id={'title-container'}>
                <SubTitle>{'Avaliação enviada!'}</SubTitle>
              </S.TitleContainer>    
              <S.subMsgSuccess>DOM Hotel agradece sua avaliação.</S.subMsgSuccess>
           </>
            )
     }
    </S.Wrapper>
  )
}

export default AvaliationArea