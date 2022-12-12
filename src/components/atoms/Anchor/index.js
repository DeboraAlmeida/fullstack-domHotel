// Arquivo criado: 10/12/2022 às 11:55

import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles.js'
import { pallete } from '../../../pallete.js'

/**
 * 
 * @param {string} msg - Texto que será exibido na âncora
 * @param {boolean} useDefaultStyle - Define se a âncora terá o estilo padrão
 * @param {string} href - Define o link da âncora
 * @param {string} target - Define o target da âncora
 * @param {function} action - Ele executa uma função ao clicar na âncora e ignora o link
 * @param {string} hoverColor - Define a cor do hover da âncora (padrão: #038C33)
 * @param {string} title - Define o título da âncora
 * @param {string} className - Você pode passar uma classe para estilizar a âncora se quiser
 * 
 * @returns {JSX.Element} - Retorna o componente âncora
 * 
 * @example
 * 
 *  <Anchor
 *    msg='ancora' // required
 *    useDefaultStyle={false}
 *    href='https://github.com/flaviano-rodrigues'
 *    hourColor='#038C33'
 *    target='_blank'
 *    title='Clique aqui para acessar o meu GitHub'
 *    action={() => console.log('clicou')} // Ignora o link
 *  />
 * 
 * 
 */


export default function Anchor({
  msg,
  useDefaultStyle = true,
  href,
  target = '_self',
  action,
  hoverColor = pallete.greenDefault,
  title,
  className
}) {

  const Component = useDefaultStyle ? S.a : 'a'


  const fun = (a) => {
    if (action) {
      a.preventDefault()
      action()
    }
  }

  return (
    <Component

      // Atributos do styled-components
      hoverColor={hoverColor}

      // Atributos padrões do HTML
      href={href}
      target={target}
      onClick={fun}
      title={title}
      className={className}
    >
      {msg}
    </Component>
  )
}

Anchor.propTypes = {
  msg: PropTypes.string.isRequired,
  useDefaultStyle: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  action: PropTypes.func,
  hoverColor: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
}
