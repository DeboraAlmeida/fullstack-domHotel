import styled from 'styled-components'

export const Wrapper = styled.div`

`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 150px;
    margin: 10px
  }
`

export const formContainer = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  textarea{
    margin-bottom: 35px;
  }
`
export const DropboxContainer = styled.div`
  width: 150px;
  margin: auto;

  div div:first-child {
    border: 2px solid black;
    border-radius: 10px;
  }
`
export const CarrouselContainer = styled.div`
  width: 200px;
  margin: auto;
`
