// Arquivo criado: 10/12/2022 às 11:55

import styled from 'styled-components';

interface Props {
  textTransform: string;
}

export const p = styled.p<Props>`
  text-transform: ${props => props.textTransform};
`
