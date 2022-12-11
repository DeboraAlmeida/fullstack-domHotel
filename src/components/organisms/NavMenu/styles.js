import styled from 'styled-components'

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-weight: bold;
`

export const MenuItem = styled.li`
  padding: 5px 10px;
  text-decoration: underline;
  cursor: pointer;

  :hover {
    color: #1FB1F0;
  }
`
