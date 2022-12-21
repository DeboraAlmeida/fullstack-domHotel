import styled from 'styled-components'

export const p = styled.p`
  color: black;

`
export const PText = styled.p`
  text-align: justify;
  margin: 30px 15px;
`
export const Titulo = styled.div`
  text-align: center;
  margin :50px 5px 50px 15px;
`
export const Subtitulo = styled.div`
  text-align: center;
  margin :50px 5px 30px 15px;
`
export const Destaque = styled.div`
  text-align: left;
  span{
    font-size: 1rem;
    margin: 5px 15px;
  }
  `
export const ContainerCarrosel = styled.div`
  display: flex;
  align-items: left;
  p{
    text-align: justify;
    width: 75%;
  }
`
export const CarrouselDiv = styled.div`
  width: 25%;
  height: 20%;
  border: 5px solid white;
  padding-left: 20px;
`
export const ImageHome = styled.div`
  display: flex;
  justify-content:space-between;

  img{
    width: 30%;
    padding: 20px 5px 20px 15px;
    margin-top: 15px;
    border-radius: 45px;
  }
`
