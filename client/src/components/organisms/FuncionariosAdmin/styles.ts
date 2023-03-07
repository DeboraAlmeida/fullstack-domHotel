import styled from 'styled-components'

export const header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 250px;
  padding: 20px 20px;
  margin-bottom: 30px;
  border: 2px solid rgba(204, 204, 204, 0.12);
  background-color: rgba(204, 204, 204, 0.12);
  border-radius: 0.5rem;
  box-shadow: 5px 5px 5px #a0a0a0ea;
  cursor: pointer;
`

export const ContentContainer = styled.div`
  select {
    padding: 20px 20px;
  }
`

export const ListContainer = styled.div`
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