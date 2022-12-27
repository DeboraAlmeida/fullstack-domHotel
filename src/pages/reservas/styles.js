import styled from 'styled-components'

export const PrincipalContainer = styled.div`
  @media screen and (max-width: 667px) {
    h2, span{
      text-align: center;
    }
  }
`

export const FormContainer = styled.form`
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
  width: 40%;
  margin: auto;
  background-color: red;
  
  
  @media screen and (maxwidth: 760px) {
    margin-top: 25px;
  }
  `
export const HeaderModal = styled.div`
  text-align: left;
`

export const ModalOptions = styled.div`
  display: flex;
  background-color: blue;
    
  ul {
    padding: 15px 0px;
    margin: 0;
    text-align: start;
  }
  ul li {
    padding-bottom: 20px;
    padding: 0px 20px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px
  }
  ul li input {
    margin-top: 20px;
  }
  ul li span {
    text-align: right;
  }
`
