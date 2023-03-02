// Arquivo criado: 10/12/2022 às 11:55

import styled from 'styled-components'

interface ButtonProps {
  width: string
  backgroundColor: string
  color: string
  paddingVertical: string
  paddingHorizontal: string
  hoverColor: string
  disabled: boolean

}

export const button = styled.button<ButtonProps>`
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: .5rem;
  text-decoration: none;

  ${props => props.disabled
    ? 'opacity:  .5; cursor: not-allowed'
    : 'cursor: pointer'
  };

  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  padding: ${props => props.paddingVertical + ' ' + props.paddingHorizontal};

  &:hover {
    background-color: ${props => props.hoverColor};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: gray;
  }
`

export const empty = styled.button``
