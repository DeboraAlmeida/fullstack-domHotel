import styled from 'styled-components'
import { pallete } from '../../pallete'

export const PrincipalContainer = styled.div`
  @media screen and (max-width: 667px) {
    h2, span {
      text-align: center;
    }
    button {
      align-items: center;
    }
  }
`

export const FormContainer = styled.form`
`

export const DataContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (maxwidth: 760px) {
    margin-top: 25px;
  }
`
export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  
`
export const ContainerReserve = styled.div`
  display: flex;
  justify-content:space-evenly;
  @media screen and (max-width: 870px){
    flex-wrap: wrap;
  }
  @media screen and (max-width: 667px){
    flex-direction:column;
    align-items: center;
  }
`
export const ReserveItem = styled.div`
  width: 20%;
  @media screen and (max-width: 870px) {
    width: 40%;
  }
  @media screen and (max-width: 667px) {
    width:100%;
  }
`
// Estilo do Modal
export const ContainerModal = styled.div`
  display: block;
  width: 60vw;
  margin: auto;
  `
export const HeaderModal = styled.div`
  text-align: left;
`
export const ModalCont = styled.div`
    display: flex;
    align-items: center;
`

export const ModalOptions = styled.div`
  display: flex;
  ul {
    padding: 15px 0px;
    margin: 0;
    text-align: start;
    width: 100%;
  }
  ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #02732A;
    padding: 20px 0;
  }
  ul li label {
    display: flex;
    align-items: center;
    margin: 0;
  }

  ul li input {
    margin: 0;
    align-items: left;
    margin-right: 20px;
    box-shadow: none;
  }
  ul li span {
    text-align: right;
  }
`
export const Btn01 = styled.div`
  text-align: center;
  button {
    width: 100%;
  }
`

export const BtnModal1 = styled.div`
  button {
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: .5rem;
  text-decoration: none;
  text-align: center;
  margin-top: 2rem;
  width: 40vw;
  height: 4vw;
  border: 2px solid #02732A;
  color: #02732A;
  background-color:white;
  cursor:pointer;
    
  &:hover {
    background-color: #02732A;
    color: white;
  }
}`
export const containerQuartos = styled.div`

  margin-top: 20px;
  
  .-wraper{
    max-width: 70%;
    margin: 0 auto;
    margin-top: 40px;
  }

  @media (max-width: 425px) {
    max-width: 100%;
  }
`

export const quartoSingleInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 2px solid ${pallete.greenDefault};

  .-img{
    width:inherit;
    max-width: 200px;
  }

  .-informacoes{
    padding-left: 20px;

    p{
      text-align: justify;
      line-height: 1.5rem;
    }

    &-inputContainer{
      display: flex;

      h2,input{
        cursor: pointer;
      }

      h2{
        font-size: 16px;
      }

      input{
        margin-top: 12px;
        accent-color: ${pallete.greenDefault};
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .-img{
      max-width: 100%;
    }

    .-informacoes{
      padding-left: 0;
      
      h2{
       margin-top: 20px;
       margin-bottom: 10px;
      }

      input{
        margin-top: 24px;
      }
    }
  }
`

export const ContainerResume = styled.div`
  width: 100%;
  max-width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  font: ${pallete.fontPrincipal};
  text-transform: uppercase;
  border: 2px solid ${pallete.greenDark};
  border-radius: 0.5rem;
  box-shadow: 5px 5px 5px #a0a0a0ea;
  ul {
    margin: 0 0 16px 0;
    padding: 0 0 0 32px;
  }
  ul > li {
    margin: 10px;
    padding: 3px;
  }
  li:nth-child(odd) {
    margin-bottom: 30px;
  }
`
