import PropTypes from 'prop-types'
import React from 'react'
import * as S from './styles'

interface Props {
  arr: Array<string>
  text?: string
  index?: number

}

const UnorderedList = ({ arr }: Props) => {
  return (
    <S.UlGeneric>
      {
        arr.map((text, index) => {
          return (
            <li key={index}>{text}</li>
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
