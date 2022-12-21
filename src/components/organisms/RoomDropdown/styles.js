import styled from 'styled-components'

export const Wrapper = styled.div`
  @media screen and (max-width: 750px) {
    padding: 0 5vw;
  }
`

export const ImagesContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;

  > div {
    width: 30%;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    > div {
      width: 100%;
      max-width: 500px;
    }
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 10px;
  }

  ul {
    font-weight: bold
  }
`