import styled from 'styled-components'
import { pallete } from '../../../pallete'


export const Footer = styled.footer`
  color: white;
`
export const SingleContent = styled.div`
  margin-bottom: 50px;

  p {
    margin-bottom: 20px;
    margin-left: 15px;
  }

  @media (max-width: 768px) {
    text-align: center;

    p {
      margin-left: 0;
      padding: 0 20px
    }
  }
`

export const Title = styled.h2`
  font-weight: normal;
  margin-bottom: 15px;
  font-size: 1.7rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const Navbar = styled.div`
  *{
    color: white !important;
    font-weight: normal;
  }

`

export const Container = styled.div`
  background-color: ${pallete.greenDefault};
  display: flex;
  justify-content: space-around;
  padding: 60px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  }
`

export const CopyRight = styled.div`
  background-color: ${pallete.greenDark};
  padding: 30px 0;
  text-align: center;
`
