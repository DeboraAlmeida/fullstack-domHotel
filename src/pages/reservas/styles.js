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