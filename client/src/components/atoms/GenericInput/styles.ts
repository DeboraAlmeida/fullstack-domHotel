import styled from 'styled-components';

interface Props {
    errorField: boolean
}

export const InputTypes = styled.input<Props>`
    border: 2px solid ${props => props.errorField ? 'rgba(253, 112, 112, 1)' : 'transparent'};
    background-color: ${props => props.errorField ? 'rgba(253, 112, 112, 0.05)' : 'rgba(204, 204, 204, 0.12)'};
    margin: 0 0 35px 0;
    padding: 1rem;
    width: 100%;
    text-transform: uppercase;
    border-radius: 0.5rem;
    box-shadow: 5px 5px 5px #a0a0a0ea;
    &:focus{
        outline: none;
        border: 2px solid #02732A;
    }
`