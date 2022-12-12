// Arquivo criado: 10/12/2022 às 11:55

import styled from 'styled-components'

export const textarea = styled.textarea`

  background-color: rgba(204, 204, 204, 0.1);
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 5px 5px 5px rgba(160,160,160,.9);
  resize: vertical;
  outline: none;

  text-transform: ${props => props.textTransform};
  width: ${props => props.width};
  border: 2px solid ${props => props.border};
  
  &:focus {
    border: 2px solid ${props => props.focusColor};
  }
`
