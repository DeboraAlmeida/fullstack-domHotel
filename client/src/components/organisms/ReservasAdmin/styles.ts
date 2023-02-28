import styled from 'styled-components';


interface IContainerSidesProps {
  pointer?: boolean;
}

export const ContainerSides = styled.div<IContainerSidesProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  cursor: ${props => props.pointer ? 'pointer' : 'default'};

  svg{
    cursor: pointer;
  }


  @media (max-width: 900px){
    .-need-mobile{
      width: 100%;
    }
  }
  
`

export const ContainerSidesInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
  padding: 0 25px;

  >div{
    width: 45%;

    input{
      margin-bottom: 30px;
    }
  }

  @media (max-width: 525px){
    >div{
      width: 100%;
    }
  }

`

export const ContainerButtonPesquisa = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
  margin-bottom: 25px;

  @media (max-width: 525px){
    justify-content: center;
  }
`

export const ContainerResultadosPesquisa = styled.div`

  p{
    margin-bottom: 10px;
  }
`

export const ContainerReservas = styled.div`
  height: 350px;
  max-height: 350px;
  overflow-y: auto;
  padding: 10px;

  h2{
    font-size: 16px;
  }

  p{
    font-size: 14px;
  }

`

export const ContainerButton = styled.div`
  button{
    position: relative;
    right: -7px;
    font-size: 11px;
  }
`

export const ErrorParagraph = styled.p`
  margin-top: 12px;
`

export const BoxReservasTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p{
    margin-bottom: 5px;
  }
`

export const CenterEmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  p{
    font-size: 12px;
  }
`

export const NameNegrito = styled.b`
  text-transform: capitalize;
`