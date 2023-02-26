// Arquivo criado: 08/02/2023 às 20:46
import React, { ReactNode } from 'react'
import * as S from './styles'

/**
 * @param {ReactNode} children
 * @param {string} width
 * 
 * @returns {JSX.Element}
 * 
 * @example
 * 
 * <ContainerLayoutAdmin width='49%'>
 *  <p>Reservas</p>
 * </ContainerLayoutAdmin>
 * 
 */

interface Props {
  children: ReactNode
  width?: string
  className?: string
}

const ContainerLayoutAdmin = ({
  children,
  width = '100%',
  className
}: Props) => {

  return (
    <S.Container className={className} width={width}>
      {children}
    </S.Container>
  )

}

export default ContainerLayoutAdmin