import styled from 'styled-components'

export const TitleH1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 40px;
    text-align: center;

    :after, :before {
    content: " ";
        display: block;
        border-bottom: 3px solid black;
        width: 70px;
    }

    @media screen and (max-width: 768px) {
        :after, :before{
            display: none;
        }
    }
`