import styled from 'styled-components'

export const Wrapper = styled.div`

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

  .invalidOption{
    color: gray;
  }

`
