import React from 'react'
import DescriptionParagraph from '../../atoms/DescriptionParagraph/index.js'
import ImageDefault from '../../atoms/ImageDefault/index.js'
import MiniTitle from '../../atoms/MiniTitle/index.js'
import UnorderedList from '../../atoms/UnorderedList/index.js'
import Dropboximage from '../DropboxImage/index.js'
import * as S from './styles.js'

const RoomDropdown = ({ title, imgCollection }) => {
  return (
    <S.Wrapper>
      <MiniTitle span={title}/>
      <S.ImagesContainer>
        {imgCollection.map((img, index) => (
          <Dropboximage key={index} srcImage={<ImageDefault src={img.src} alt={img.alt} />} description={
          <S.DescriptionContainer>
            <MiniTitle span={img.titleDescription} />
            <DescriptionParagraph msg={<UnorderedList arr={img.description}/>} />
          </S.DescriptionContainer>
        }/>                     
        ))}
      </S.ImagesContainer>
    </S.Wrapper>
  )
}

export default RoomDropdown