import styled from 'styled-components'

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
