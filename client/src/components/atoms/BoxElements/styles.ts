import styled from 'styled-components'
import pallete from '../../../pallete'

export const Container = styled.div`
  background-color: ${pallete.greenDefault};
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 35%;

  @media (max-width: 810px) {
   width: 60%;
   text-align: center;
  }
`