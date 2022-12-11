import React from 'react'
import MiniTitle from '../../atoms/MiniTitle/index.js'
import PrincipalTitle from '../../atoms/PrincipalTitle/index.js'
import Anchor from '../../atoms/Anchor/index.js'

import * as S from './styles.js'
import ImageDefault from '../../atoms/ImageDefault/index.js'


const ComponentsArea = () => {
  const miniTitleCollection = [{ price: '150,00' }, { price: '250,00' }, { price: '350,00' }]
  const imageColletion = [{ id: 1, url: 'https://img.freepik.com/premium-vector/cute-koala-hanging-tree-with-cub-cartoon_346903-877.jpg?w=2000' }, { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLWy7WPxUezxRDww85wVzeLbUxbF5f101qKdB6KnPCOs9YXLZHsxqqh32qWew_fVLf4s&usqp=CAU' }]

  return (
    <S.Wrapper>
      <PrincipalTitle>Página de Components</PrincipalTitle>
      {miniTitleCollection.map((item, index) => (
        <MiniTitle key={index} span="R$ " text={item.price} />
      ))}
      <Anchor msg='ancora' />
      <S.ImageContainer>
        {imageColletion.map(image => (
            <ImageDefault key={image.id} src={image.url} />
        ))}
      </S.ImageContainer>
    </S.Wrapper>
  )
}


export default ComponentsArea