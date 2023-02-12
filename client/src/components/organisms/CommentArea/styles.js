import styled from 'styled-components'
import pallete from '../../../pallete'

export const Wrapper = styled.div`
  padding: 10px 20px;
  background-color: rgba(196, 196, 196, 0.4);
  border-radius: 10px;
  margin: 15px 0px;

  p {
    text-align: justify;
  }
`

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  svg {
    color: ${pallete.greenDefault}
  }

  div {
    margin-left: 12px;
    display: flex;
    align-items: center;
  }
`