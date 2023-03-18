// Arquivo criado: 17/03/2023 às 16:55
import Button from 'components/atoms/Button'
import GenericInput from 'components/atoms/GenericInput'
import GenericLabel from 'components/atoms/GenericLabel'
import MiniTitle from 'components/atoms/MiniTitle'
import Modal from 'components/atoms/Modal'
import React, { FormEvent, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import backEnd from 'utils/backEnd'
import validatePassword from 'utils/validateFields'

const ResetPassword = () => {

  const { token } = useParams<{ token: string }>()

  const navigate = useNavigate()

  const [values, setValues] = useState({
    senha: '',
    repetir_senha: ''
  })

  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  useEffect(() => {
    if(!token) {
      navigate('/')
    }
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(!values.senha || !values.repetir_senha) {
      handleShowMessage('Preencha todos os campos')
      return
    }

    if(!validatePassword(values.senha)) {
      handleShowMessage('A senha deve conter pelo menos 6 caracteres, 1 caracter especial e 1 número')
      return
    }

    if(values.senha !== values.repetir_senha) {
      handleShowMessage('As senhas não são iguais')
      return
    }

    await backEnd('/update-user-password', 'POST', false, { password: values.senha, token }).then(res => {
      if(res.status === 200) {
        handleShowMessage('Senha alterada com sucesso. Basta fazer login novamente')

        setTimeout(() => {
          navigate('/')
        }, 5000)
        return
      } 
      handleShowMessage(res.message)
    }).catch(() => {
      handleShowMessage('Erro ao alterar senha')
    })
  }

  const handleShowMessage = (msg: string) => {
    setShowModal(true)
    setModalMessage(msg)

    setTimeout(() => {
      setShowModal(false)
      setModalMessage('')
    }, 5000)
  }

  return (
    <>
      <Helmet>
        <title>DOM Hotel - Recuperação de senha</title>
        <meta name='description' content='DOM Hotel - Recuperação de senha' />
      </Helmet>
      <form onSubmit={handleSubmit}>
        {
          [
            {
              label: 'Senha',
              id: 'senha',
              type: 'password'
            },
            {
              label: 'Repetir Senha',
              id: 'repetir_senha',
              type: 'password'
            }
          ].map((input, index) => (
            <div key={index}>
              <GenericLabel for={input.id}>
                {input.label}
                <GenericInput
                  id={input.id}
                  onChange={e => setValues(prev => ({ ...prev, [input.id]: e.target.value }))}
                  type={input.type}
                />
              </GenericLabel>
            </div>
          ))
        }

        <Button>Salvar</Button>
      </form>

      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <MiniTitle text={modalMessage} />
      </Modal>
    </>
  )

}

export default ResetPassword
