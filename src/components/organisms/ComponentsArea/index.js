import React from 'react'
import MiniTitle from '../../atoms/MiniTitle/index.js'
import PrincipalTitle from '../../atoms/PrincipalTitle/index.js'
import Anchor from '../../atoms/Anchor/index.js'

import * as S from './styles.js'


const ComponentsArea = () => {
  const miniTitleCollection = [{ price: '150,00' }, { price: '250,00' }, { price: '350,00' }]

  return (
    <S.Wrapper>
      <PrincipalTitle>Página de Components</PrincipalTitle>
      {miniTitleCollection.map((item, index) => (
        <MiniTitle key={index} span="R$ " text={item.price} />
      ))}
      <Anchor />
    </S.Wrapper>
  )
}


export default ComponentsArea