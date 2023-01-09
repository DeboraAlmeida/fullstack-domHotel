import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import * as S from './styles.js'

const Stars = ({ level }) => {
  const [starLevel, setStarLevel] = useState(['', '', '', '', ''])

  useEffect(() => {
    const result = starLevel.map((star, index) => {
      if (index < level) {
        return 'marked'
      } else {
        return 'void'
      }
    })
    setStarLevel(result)
  }, [])

  return (
    <S.Wrapper>
      {starLevel.map((star, index) => {
        if (star === 'void') {
          return <AiOutlineStar key={index}/>
        } else {
          return <AiFillStar key={index}/>
        }
      })}
    </S.Wrapper>
  )
}

export default Stars