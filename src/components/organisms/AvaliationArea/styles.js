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

  display: flex;
  flex-direction: column;
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
