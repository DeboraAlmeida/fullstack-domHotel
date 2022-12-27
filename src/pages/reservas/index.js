// Arquivo criado: 15/12/2022 às 20:49
import React from 'react'
import GenericInput from '../../components/atoms/GenericInput'
import GenericLabel from '../../components/atoms/GenericLabel'
import ImageDefault from '../../components/atoms/ImageDefault'
import MiniTitle from '../../components/atoms/MiniTitle'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import premium from './images/acomodacao_premium.jpg'
import standard from './images/acomodacao_standard.jpg'
import vip from './images/acomodacao_vip.jpg'
import * as S from './styles'


export const Reservas = () => {
  const inputsCollection = [
    {
      id: '1',
      type: 'text',
      label: 'Nome'
    },
    {
      id: '2',
      type: 'email',
      label: 'E-mail'
    },
    {
      id: '3',
      type: 'tel',
      label: 'Telefone'
    }

  ]

  const inputsReserve = [
    {
      id: '1',
      type: 'date',
      label: 'Data de checkin'
    },
    {
      id: '2',
      type: 'date',
      label: 'Data de checkout'
    },
    {
      id: '3',
      type: 'number',
      label: 'Número de adultos',
      placeholder: '1',
      max: '4',
      min: '1'
    },
    {
      id: '4',
      type: 'number',
      label: 'Número de crianças',
      max: '4',
      min: '0'
    }
    
  ]

  const quartos = [
    {
      title: 'Standard',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse tempore hic nemo! Quam consequuntur ex rem, similique esse totam recusandae, ea voluptas neque vitae amet sapiente impedit sint cum!',
      price: '120,00',
      img: standard
    },
    {
      title: 'Premium',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse tempore hic nemo! Quam consequuntur ex rem, similique esse totam recusandae, ea voluptas neque vitae amet sapiente impedit sint cum!',
      price: '160,00',
      img: premium
    },
    {
      title: 'VIP',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse tempore hic nemo! Quam consequuntur ex rem, similique esse totam recusandae, ea voluptas neque vitae amet sapiente impedit sint cum!',
      price: '200,00',
      img: vip
    }
  ]

  return (
    <S.PrincipalContainer>
      <PrincipalTitle>Reserve sua Acomodação</PrincipalTitle>
      <MiniTitle span='Passo 1: ' text='Insira seus dados' />
      <S.FormContainer>
        {inputsCollection.map((element, index) => (
          <S.Container key={index}>
            <GenericLabel for={element.id}>{element.label}</GenericLabel>
            <GenericInput type={element.type} id={element.id}/>
          </S.Container>
        ))}  
      </S.FormContainer>
      <S.ContainerReserve>
        {inputsReserve.map((element, index) => (
          <S.ReserveItem key={index}>
            <GenericLabel for={element.id}>{element.label}</GenericLabel>
            <GenericInput type={element.type} id={element.id} placeholder={element.placeholder} min={element.min} max={element.max} />
          </S.ReserveItem>
        ))}   
      </S.ContainerReserve>
      <S.containerQuartos>
        <MiniTitle span='Passo 2: ' text='Escolha o Quarto' />

        <div className='-wraper'>
          {
            quartos.map((element, index) => (
              <S.quartoSingleInput key={index} >
                <div className='-img'><ImageDefault src={element.img} alt={element.title} /></div>
                <div className='-informacoes'>
                  <MiniTitle span={element.title} />
                  <p>{element.description}</p>
                  <div className='-informacoes-inputContainer'>
                    <input name='quarto' id={`input_${index}`} type='radio' />
                    <GenericLabel for={`input_${index}`}><MiniTitle span='R$ ' text={element.price} /></GenericLabel>
                  </div>
                </div>
              </S.quartoSingleInput>
            ))
          }
        </div>
      </S.containerQuartos>
    </S.PrincipalContainer>
  )

}

export default Reservas
