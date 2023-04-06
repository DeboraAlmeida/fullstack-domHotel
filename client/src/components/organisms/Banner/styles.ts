import styled from 'styled-components'

export const BoxBanner = styled.div`
    display: flex;
    width: 100%;
    background-color: #F2F2F2;
    margin: 10px auto;
    border: 2px solid #b49c21;
    border-radius: 5px;
    box-shadow: 5px 5px 5px gray;
        
    img{
        width: 80%;
    }

    span{
        color: black;
        font-size: 0.8rem;
    }
    
    @media screen and (max-width: 1058px) {
    display: block; 
    img{
        width: 100%;
    }
  }
`
export const boxSpan = styled.div`
    border: 2px dotted black;
    border-radius: 5px;
    text-align: center;
    margin:10px;
    padding:10px 10px;
    span{
        font-size: 1.em;
    }
`

export const btnCoupon = styled.div`
    bottom: 0;
    right: 0;

    button{
        font-size: 0.8em;
        padding: 10px;
        margin: 10px;
    }

`