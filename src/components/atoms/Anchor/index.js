// Arquivo criado: 10/12/2022 às 11:55

import PropTypes from 'prop-types'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { pallete } from '../../../pallete.js'
import * as S from './styles.js'

/**
 * 
 * @param {string} msg - Mensagem que será exibida no componente
 * @param {boolean} useDefaultStyle - Se true, o componente terá o estilo padrão. Se false, o componente não terá estilo
 * @param {string} href - Link para onde o usuário será redirecionado
 * @param {string} target - Atributo target do HTML
 * @param {function} action - Função que será executada quando o usuário clicar no componente (Ignora o link)
 * @param {string} hoverColor - Cor que será exibida quando o usuário passar o mouse por cima do componente
 * @param {string} title - Atributo title do HTML
 * @param {string} className - Atributo className do HTML
 * 
 * @returns {JSX.Element} - Componente Anchor
 * 
 * @example
 * 
 * <Anchor
 *    msg='ancora' // required
 *    useDefaultStyle={false}
 *    href='https://github.com/flaviano-rodrigues'
 *    hourColor='#038C33'
 *    target='_blank'
 *    title='Clique aqui para acessar o meu GitHub'
 *    className='classe'
 *    action={() => console.log('clicou')} // Ignora o link
 *  />
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
  className,
  activeLink
}) {

  const Component = useDefaultStyle ? S.a : 'a'
  const navigate = useNavigate()
  const location = useLocation()


  const fun = (a) => {
    if (action) {
      a.preventDefault()
      action()
    } else if (href && target === '_self') {
      a.preventDefault()
      navigate(href)
    }
  }

  const linkActived = {
    color: activeLink,
    cursor: 'default',
    textDecoration: 'none'
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
      style={location.pathname === href && activeLink ? linkActived : {}}
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
  className: PropTypes.string,
  activeLink: PropTypes.string
}
