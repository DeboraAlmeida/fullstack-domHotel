import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface Props {
  level: number
}

const Stars = ({ level }: Props) => {
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
    <div>
      {starLevel.map((star, index) => {
        if (star === 'void') {
          return <AiOutlineStar key={index} />
        } else {
          return <AiFillStar key={index} />
        }
      })}
    </div>
  )
}

export default Stars