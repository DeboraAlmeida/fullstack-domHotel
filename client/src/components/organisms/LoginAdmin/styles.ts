import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 768px;
  margin: auto;
  padding: 100px 60px;
  box-shadow: 10px 10px 5px #a0a0a0ea;
  border-radius: 10px;
  h2{
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  button {
    margin-top: 50px;
    width: 250px;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    box-shadow: none;
    border-radius: none;
    border: none;
  }
`

export const ContainerInputSignIn = styled.div`
  width: 100%; 
  input[type = 'password']{
    margin-bottom: 0;
  }
`

export const tittleAviso = styled.h3`
  margin: 20px;
  text-align: center;
`