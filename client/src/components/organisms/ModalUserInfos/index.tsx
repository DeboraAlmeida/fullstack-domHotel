// Arquivo criado: 13/03/2023 às 16:41

import Button from "components/atoms/Button"
import GenericInput from "components/atoms/GenericInput"
import GenericLabel from "components/atoms/GenericLabel"
import MiniTitle from "components/atoms/MiniTitle"
import IUser from "interfaces/User"
import React, { useRef, useState } from "react"
import { FaUser } from "react-icons/fa"
import * as S from "./styles"

const ModalUserInfos = () => {

  /**
   * ATENÇÂO: 
   * - falta fazer os scripts de validação e envio de dados para o servidor.
   * - Não salvei a imagem em um state pois acredito que fica melhor de gerenciar a pessoa que for fazer a validação dos scripts.
   */

  const [showPasswordInputs, setShowPasswordInputs] = useState(false)

  const userInfos: IUser = JSON.parse(sessionStorage.getItem('isLogged') as string)

  const imgContainerRef = useRef<HTMLDivElement>(null)

  const showUserFile = () => {
    const input = document.getElementById('file') as HTMLInputElement
    const imgContainer = imgContainerRef.current as HTMLDivElement

    if (input.files) {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.result) {
          imgContainer.style.backgroundImage = `url(${reader.result})`
          imgContainer.innerHTML = ''
        }
      }
      reader.readAsDataURL(input.files[0])
    }
  }

  return (
    <S.Container>
      <MiniTitle span="Minhas " text="informações" />

      <S.Form>

        <GenericLabel for="file">
          Foto de Perfil
          <S.ImgContainer ref={imgContainerRef}>
            <FaUser />
          </S.ImgContainer>
          <input
            accept="image/*"
            multiple={false}
            onChange={showUserFile}
            id="file"
            type="file"
            hidden
          />
        </GenericLabel>

        {
          [
            {
              label: 'Nome',
              id: 'name',
              defaultValue: userInfos.name,
              type: 'text'
            },
            {
              label: 'Email',
              id: 'email',
              defaultValue: userInfos.email,
              type: 'email'
            },
            {
              label: 'Senha',
              id: 'senha',
              hidden: !showPasswordInputs,
              type: 'password'
            },
            {
              label: 'Repetir Senha',
              id: 'repetir_senha',
              hidden: !showPasswordInputs,
              type: 'password'
            }
          ].map((input, index) => (
            <div hidden={input.hidden} key={index}>
              <GenericLabel for={input.id}>
                {input.label}
                <GenericInput
                  value={input.defaultValue}
                  onChange={() => { }}
                  id={input.id}
                  type={input.type}
                />
              </GenericLabel>
            </div>
          ))
        }

        {
          !showPasswordInputs && <S.TextChangePassword onClick={() => setShowPasswordInputs(true)}>Alterar Senha</S.TextChangePassword>
        }

        <Button>Salvar</Button>
      </S.Form>
    </S.Container>
  )

}

export default ModalUserInfos
