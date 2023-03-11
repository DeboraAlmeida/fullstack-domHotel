import styled from 'styled-components'

export const ContainerCarousel = styled.div`
 position: relative;
 top: 0;
 left: 0;
 img{
 margin: auto;
 align-items:center;
 width: 100%;
 }
`

export const BtnCarousel = styled.button`
 position: absolute; 
 top: 50%;
 left :1%;
 margin: 0;
 background-color: transparent;
 border:none;
 font-size:25px;
 color:white;
 cursor: pointer;
 `
export const BtnCarousel2 = styled.button`
 position: absolute; 
 top: 50%;
 left : 94%;
 background-color: transparent;
 border:none;
 font-size:25px;
 color:white;
 cursor: pointer;
 @media(max-width: 550px){
    left: 92%;
    position: absolute;
 }

 @media(max-width: 400px){
    left: 90%;
    position: absolute;
 }
`