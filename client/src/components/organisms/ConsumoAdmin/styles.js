import styled from 'styled-components'

export const Container = styled.div`
  /* margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  max-width: 600px; */
  p {
    margin-top: 25px;
  }
`
export const Title = styled.h3`
  /* font-weight: normal; */
`

export const Form = styled.form`
  margin-top: 50px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }

  @media screen and (max-width: 800px) {
    > div {
      flex-direction: column;
      align-items: center;
      gap: 40px 0px;
    }
  }
`

export const Button = styled.div`
  button{
    width: 100%;
    max-width: 400px;
    margin: auto;
    margin-top: 50px;
  }
`
export const ContainerReserves = styled.div`
    width: 100%;
    max-width: 360px;
    border: 2px solid rgba(204, 204, 204, 0.12);
    background-color: rgba(204, 204, 204, 0.12);
    border-radius: 0.5rem;
    box-shadow: 5px 5px 5px #a0a0a0ea;
    display: flex; 
    flex-direction: column;
    align-items: center;

    label {
      margin: 15px 0px 0px 0px;      
    }

    ul {
      list-style: none;
      width: 100%;
      padding: 10px 15px;
      height: 450px;
      overflow: auto;
    }

    li {
      margin: 10px 0px;
      padding: 15px 40px;
      width: 100%;
      border: 2px solid rgba(204, 204, 204, 0.12);
      background-color: rgba(204, 204, 204, 0.12);
      border-radius: 0.5rem;
      box-shadow: 5px 5px 5px #a0a0a0ea;

      :hover {
        border-color: #038C33;
        cursor: pointer;
      }

      ::selection {
        border-color: #038C33
     }
    }
`

export const ContainerProducts = styled.div`
    width: 100%;
    max-width: 360px;
    border: 2px solid rgba(204, 204, 204, 0.12);
    background-color: rgba(204, 204, 204, 0.12);
    border-radius: 0.5rem;
    box-shadow: 5px 5px 5px #a0a0a0ea;
    display: flex; 
    flex-direction: column;
    align-items: center;

    label {
      margin: 15px 0px 0px 0px;      
    }

    ul {
      list-style: none;
      width: 100%;
      padding: 10px 15px;
      height: 450px;
      overflow: auto;
    }

    li {
      margin: 10px 0px;
      padding: 15px 40px;
      width: 100%;
      border: 2px solid rgba(204, 204, 204, 0.12);
      background-color: rgba(204, 204, 204, 0.12);
      border-radius: 0.5rem;
      box-shadow: 5px 5px 5px #a0a0a0ea;

      :hover {
        border-color: #038C33;
        cursor: pointer;
      }

      :focus {
        border-color: #038C33
    }
    }
`

export const ContainerTabProducts = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  padding: 0px 5px;
  gap: 0 5px;

  span {
    width: 100%;
    text-align: center;
    padding: 20px 0px;
    background-color: #038C33;
    color: white;
    text-transform: uppercase;
    font-weight: bold;

    :hover {
      background-color: #02732A;
      text-decoration: underline;
      cursor: pointer;
    }

    :focus {
      background-color: #02732A;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 320px) {
      flex-direction: column;
      align-items: center;
      gap: 5px 0px;
  }
`