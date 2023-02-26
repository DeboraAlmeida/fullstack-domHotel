import styled from 'styled-components';

interface ContainerProps {
  width: string;
}

export const Container = styled.div<ContainerProps>`
  border: 2px solid rgba(204, 204, 204, 0.12);
  background-color: rgba(204, 204, 204, 0.12);
  margin: 0 0 35px 0;
  padding: 1rem;
  width: 100%;
  text-transform: uppercase;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 5px #a0a0a0ea;
  width: ${props => props.width};
`
