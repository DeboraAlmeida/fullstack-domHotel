// Arquivo criado: 10/12/2022 às 11:55

import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles.js'
import { pallete } from '../../../pallete.js'


/**
 * 
 * @param {boolean} useDefaultStyle - Se true, usa o estilo padrão do componente. Se false, usa o estilo padrão do HTML.
 * @param {string} placeholder - Texto de placeholder.
 * @param {string} defaultValue - Valor padrão do input.
 * @param {number} limit - Limite de caracteres.
 * @param {number} rows - Quantidade de linhas.
 * @param {number} cols - Quantidade de colunas.
 * @param {string} textTransform - Transformação de texto.
 * @param {string} className - Classe CSS.
 * @param {boolean} autoFocus - Se true, o input é focado automaticamente.
 * @param {boolean} disabled - Se true, o input fica desabilitado.
 * @param {string} focusColor - Cor da borda do input quando focado.
 * @param {string} name - Nome do input.
 * @param {string} id - Id do input.
 * @param {string} width - Largura do input.
 * 
 * @returns {JSX.Element} - Componente TextArea.
 * 
 * @example
 * 
 * <TextArea
 *   useDefaultStyle={true}
 *   placeholder='Digite aqui'
 *   defaultValue='Valor padrão'
 *   limit={100}
 *   rows={3}
 *   cols={1}
 *   textTransform='uppercase'
 *   className='minha-classe'
 *   autoFocus={false}
 *   disabled={false}
 *   focusColor='red'
 *   name='meu-input'
 *   id='meu-input'
 *   width='100%'
 * />
 * 
 */


export default function TextArea({
  useDefaultStyle = true,
  placeholder,
  defaultValue,
  limit,
  rows = 3,
  cols = 1,
  textTransform,
  className,
  autoFocus,
  disabled = false,
  focusColor = pallete.greenDefault,
  name,
  id,
  width = '100%'
}) {

  const Component = useDefaultStyle ? S.textarea : S.empty
  const ref = useRef()
  const [border, setBorder] = useState('transparent')


  const handleHeight = () => {
    ref.current.style.height = 'inherit'
    ref.current.style.height = `${(ref.current.scrollHeight - 30)}px`

    ref.current.value.length > 0 && !disabled ? setBorder(focusColor) : setBorder('transparent')
  }

  useEffect(() => {
    return () => ref.current ? handleHeight() : null
  }, [])

  return (
    <Component

      // Atributos do styled-components
      textTransform={textTransform}
      focusColor={focusColor}
      width={width}
      border={border}

      // Atributos padrões do HTML
      placeholder={placeholder}
      defaultValue={defaultValue}
      onKeyUp={handleHeight}
      maxLength={limit}
      rows={rows}
      cols={cols}
      className={className}
      autoFocus={autoFocus}
      disabled={disabled}
      name={name}
      id={id}

      // Atributos do React
      ref={ref}
    >
    </Component>
  )
}

TextArea.propTypes = {
  useDefaultStyle: PropTypes.bool,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  limit: PropTypes.number,
  rows: PropTypes.number,
  cols: PropTypes.number,
  textTransform: PropTypes.string,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  focusColor: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  width: PropTypes.string
}
