import styled from 'styled-components'
import { pallete } from '../../pallete'

export const PrincipalContainer = styled.div`
  @media screen and (max-width: 667px) {
    h2, span{
      text-align: center;
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
