// Arquivo criado: 10/12/2022 às 11:55

import React, { useRef, useState } from 'react'
import pallete from '../../../pallete'
import * as S from './styles.js'

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
 * @param {string} height - Altura do input.
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
 *  height='150px'
 * />
 * 
 */


interface Props {
  useDefaultStyle?: boolean
  placeholder?: string
  defaultValue?: string
  limit?: number
  rows?: number
  cols?: number
  textTransform?: string
  className?: string
  autoFocus?: boolean
  disabled?: boolean
  focusColor?: string
  name?: string
  id?: string
  onChange?: (e: any) => void
  error?: string
  width?: string
  height?: string
}

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
  onChange = () => { },
  error,
  width = '100%',
  height = '150px'
}: Props) {

  const Component = useDefaultStyle ? S.textarea : S.empty
  const ref = useRef<HTMLTextAreaElement>()
  const [border, setBorder] = useState('transparent')


  const handleVal = (e: Event) => {
    if(ref.current){
      ref.current.value.length > 0 && !disabled ? setBorder(focusColor) : setBorder('transparent')
      onChange(e)
    }
  }


  return (
    <Component

      // Atributos do styled-components
      textTransform={textTransform}
      focusColor={focusColor}
      width={width}
      border={border}
      height={height}

      // Atributos padrões do HTML
      placeholder={placeholder}
      defaultValue={defaultValue}
      maxLength={limit}
      rows={rows}
      cols={cols}
      className={className}
      autoFocus={autoFocus}
      disabled={disabled}
      name={name}
      id={id}
      onChange={handleVal}

      // Atributos do React
      ref={ref}

      // Error Atribute
      errorField={error}
    >
    </Component>
  )
}
