import styled from 'styled-components'
import pallete from '../../../pallete'


export const Header = styled.div`
  background-color: ${pallete.greenDefault};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export const Nav = styled.nav`
  width: fit-content;
  padding: 5px 0px;
  margin: 0 auto;
  color: #fff;


  li {
    margin: 0px 7px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`