import PropTypes from 'prop-types'
import React from 'react'
import * as S from './styles.js'

const UnorderedList = ({ arr }) => {
  return (
    <S.UlGeneric>
        {
            arr.map((text, index) => {
              return (
                    <li key={ index }>{ text }</li>
              )
            })
        }
    </S.UlGeneric>

  )
}
UnorderedList.propTypes = {
  arr: PropTypes.array,
  text: PropTypes.node,
  index: Number
}

export default UnorderedList
