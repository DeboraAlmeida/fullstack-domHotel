import PropTypes from 'prop-types'
import React from 'react'
import * as S from './styles'

const PrincipalTitle = ({ children }) => {
  return (
    <>
      <S.TitleH1>{children}</S.TitleH1>
    </>
  )
}

PrincipalTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrincipalTitle