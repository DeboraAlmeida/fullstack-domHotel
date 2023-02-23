// Arquivo criado: 10/12/2022 às 11:55

import styled from 'styled-components'

interface Props {
  errorField: boolean
  focusColor: string
  border: string
  textTransform: string
  width: string
  height: string

}

export const textarea = styled.textarea<Props>`

  background-color: rgba(204, 204, 204, 0.1);
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 5px 5px 5px rgba(160,160,160,.9);
  resize: none;
  outline: none;

  text-transform: ${props => props.textTransform};
  width: ${props => props.width};
  height: ${props => props.height};
  border: 2px solid ${props => props.errorField ? 'rgba(253, 112, 112, 1)' : props.border};
  
  &:focus {
    border: 2px solid ${props => props.focusColor};
  }
`

export const empty = styled.textarea<Props>``