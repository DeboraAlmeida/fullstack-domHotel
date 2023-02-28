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
  width: 40%;
  min-height: 100px ;
  text-align: center;

  @media (max-width: 810px) {
   width: 60%;
  }

  @media (max-width: 576px) {
   width: 90%;
  }
`