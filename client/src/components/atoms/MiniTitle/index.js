import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles.js'

const MiniTitle = ({ span, text }) => {
  return (
    <S.DivWrapper>
      <S.H2Title><S.SpanText>{span}</S.SpanText>{text}</S.H2Title>
    </S.DivWrapper>
  )
}

MiniTitle.propTypes = {
  span: PropTypes.node,
  text: PropTypes.node
}

export default MiniTitle