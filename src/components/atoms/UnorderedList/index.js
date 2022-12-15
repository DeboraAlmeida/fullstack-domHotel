import React from 'react'
import PropTypes from 'prop-types'
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
  arr: PropTypes.array
}

export default UnorderedList
