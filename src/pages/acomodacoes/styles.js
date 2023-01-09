import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
 
  h2 {
    font-size: 16px;
  }
`

export const RoomsContainer = styled.div` 
display: flex;

&:nth-child(3) {
    margin-bottom: 15px;
    padding-top: 15px;
    border-top: 2px solid green;
    border-bottom: 2px solid green;
  }
`

export const FeaturedContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 40px 0;
  }
  
  h2 {
    margin-bottom: 40px;
  }
`

export const OfferContainer = styled.div`
  display: flex;
  gap: 80px;
  justify-content: space-between;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
    
    > div {
      padding: 0 10vw;
      width: 100%;
    }
  }
`

export const CarrouselContainer = styled.div`
  width: 50%;
  margin: auto;
`

export const OfferDescription = styled.div`
  width: 50%;

  h2 {
    margin-bottom: 0;
  }
  
  P {
    margin: 15px 0;
  }

  p:last-child {
    font-weight: bold;
  }

  ul {
    margin: 20px 0;
    list-style-type: disc;
    list-style-position: inside;
  }

  ul li {
    margin: 5px 0;
  }
`

export const GreenLine = styled.hr`
  margin: 10px 0px;
  border: 1px solid var(--green-dark);
`
