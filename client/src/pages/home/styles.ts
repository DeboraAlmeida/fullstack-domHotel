import styled from 'styled-components'
import pallete from '../../pallete'

export const Wrapper = styled.div`
  h2 {
    margin: 30px 0;
    text-align: center;
  }

  p {
    text-align: justify;
    text-indent: 50px;
  }
`
export const AccommodationContainer = styled.div`
  a {
    color: ${pallete.greenDefault};
    font-weight: bold;
  }

  p {
    margin: 30px 0px 15px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    width: 28%;
    cursor: pointer;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    
    img {
    width: 80%;
  }
  }
`

export const GastronomyContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin-top: 30px;
  }

`
export const GastronomyDescription = styled.div`
  display: flex;
  flex-direction: column; 
  margin-right: 50px;
  padding: 50px;

  p {
      margin-bottom: 20px;
    }

  h2{ 
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    margin-right: 0;
    margin-bottom: 50px;
  }

`
export const GastronomyImage = styled.div`
  display:flex;
  justify-content: flex-start;
  padding-right: 80px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
