import styled from 'styled-components'
import pallete from '../../../pallete'

export const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.75);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalComp = styled.div`
    background-color: white;
    color: 1e1e1e;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    position: relative;
    max-width: 556px;
    width: 90vw;
    max-height: 90vh;
    overflow: auto;
`

export const BtnClose = styled.div`
    position: absolute;
    top: 24px ;
    right: 2rem;

   button {
    font-size: 26px;
    width: 1.5rem;
    height: 1.25rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${pallete.greenDefault};
    
    &:hover {
    color: black;
    }
    
   }

`