import styled from 'styled-components'
import pallete from '../../../pallete'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  a {
    margin: 15px 0 25px;
    color: ${pallete.greenDefault};
    cursor: pointer;
  }

  button {
    width: 250px;
  }
`

export const ContainerInputSignIn = styled.div`
  width: 100%; 

  input[type = 'password']{
    margin-bottom: 0;
  }
`

export const ContainerInputSignUp = styled.div`
  width: 100%; 
`

export const ContainerSignUp = styled.div`
  display: flex; 
  margin: 10px 0;

  a {
    margin: 0;
    margin-left: 5px;
    font-weight: bold;
  }
`

export const ContainerSignIn = styled.div`
  display: flex; 
  margin: 10px 0;

  a {
    margin: 0;
    margin-left: 5px;
    font-weight: bold;
  }
`