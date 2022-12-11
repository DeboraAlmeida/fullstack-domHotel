// Arquivo criado: 10/12/2022 às 11:55

import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles.js'

/**
 * 
 * @param {string} msg - Texto que será exibido na âncora
 * @param {boolean} useDefaultStyle - Define se a âncora terá o estilo padrão
 * @param {string} href - Define o link da âncora
 * @param {string} target - Define o target da âncora
 * @param {function} action - Ele executa uma função ao clicar na âncora e ignora o link
 * 
 * @returns {JSX.Element} - Retorna o componente âncora
 * 
 * @example
 * 
 *  <Anchor
 *    msg='ancora'
 *    useDefaultStyle={false}
 *    href='https://github.com/flaviano-rodrigues'
 *    target='_blank'
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
  action
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
      {...href && href}
      target={target}
      onClick={fun}
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
  action: PropTypes.func
}
