import styled from 'styled-components'
import pallete from '../../../pallete'

export const Container = styled.div`
  background-color: ${pallete.backgroundColorAdmin};
  margin: 30px auto;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 60%;

  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`