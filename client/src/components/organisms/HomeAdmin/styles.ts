import styled from 'styled-components'

export const Container = styled.div`

`

export const BoxItens = styled.div`
  display: flex;
  justify-content: space-around;
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
    text-align: center;

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

export const ContainerContact = styled.div`
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
export const ContainerTabContact = styled.div`
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