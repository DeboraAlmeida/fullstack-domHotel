import styled from 'styled-components'
import { pallete } from '../../../pallete'

export const Wrapper = styled.div`
  h2{
    margin-bottom: 35px;
  }

  button{
    width: 150px;
    align-self: center;
  }

  #title-container h2 {
    font-size: 28px;
    margin-bottom: 30px;
  }  

  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  @media(max-width:400px){
    *{
      font-size: 20px !important;
    }
  }
`

export const subMsgSuccess = styled.p`
  @media(max-width:400px){
    font-size: 14px;
  }
`

export const StarsContainer = styled.div`
  margin: 20px 0px 30px;
  display: flex;
  justify-content: center;

  svg{
    font-size: 28px;
    color: ${pallete.greenDefault};
    cursor: pointer;
    margin: 0px 5px;
  }
`
