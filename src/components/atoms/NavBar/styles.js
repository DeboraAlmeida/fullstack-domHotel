import styled from 'styled-components'

export const Nav = styled.nav`
  list-style-type: none;
  width: fit-content;
  padding: 5px 10px;
  margin: 0 auto;

  li {
    margin: 0px 10px;
    font-weight: bold;
    display: inline-block;
    
    a {
      text-decoration: none;
      font-weight: normal;
      color: #fff;
    }
  }
`