import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
`
export const Title = styled.h3`
  font-weight: normal;
`

export const Form = styled.form`
  margin-top: 20px;
`

export const Button = styled.div`
  text-align: center;

  button{
    width: 200px;
  }
`
export const BoxAdminHome = styled.div`
  margin: 30px auto;
  width: 60%;
  div{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 810px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
`