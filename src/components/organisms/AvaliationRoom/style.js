import styled from 'styled-components'
import { pallete } from '../../../pallete.js'

export const Wrapper = styled.div`
  h2 {
    text-align: justify;
  }
`

export const TitleContainer = styled.div`
h2{
  font-size: 32px;
  margin-bottom: 30px;
  }    
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 15px;
  img {
    position: relative;
    top: -150px;
  }  

  @media screen and (max-width: 556px) {
    img {
    top: 0px;
    }  
  }
`

export const ButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CommentContainer = styled.div`
  border-radius: 10px;
  padding: 0px 20px;
  border: 2px solid ${pallete.greenDefault};
  max-height: 250px;
  overflow: auto;
`

export const TitleCommentContainer = styled.div`
  margin: 15px 0px 5px;
`