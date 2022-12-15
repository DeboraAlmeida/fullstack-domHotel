// Arquivo criado: 10/12/2022 às 11:55

import styled from 'styled-components'

export const a = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
    color: ${props => props.hoverColor};
  }
`
