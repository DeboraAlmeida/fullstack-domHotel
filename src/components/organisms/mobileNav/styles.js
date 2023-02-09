import styled from 'styled-components'
import pallete from '../../../pallete'

export const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  svg{
    font-size: 25px;
    color: ${pallete.greenDefault};
    cursor: pointer;
  }
 
`

export const coverOptions = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  opacity: 0;
  animation: show 0.4s forwards;

  @keyframes show{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
 
`

export const containerOptions = styled.div`
  background: linear-gradient(to bottom, ${pallete.greenDefault}, ${pallete.greenDark});
  border-bottom: 4px solid ${pallete.gold};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  animation: slideDown 0.4s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  nav{
    display: flex;
    text-align: center;
    flex-direction: column;
    color: transparent
  }

  span{
    margin-top: 25px;
    color: white;
  }


  @keyframes slideDown{
    0%{
      height: 0;
    }
    100%{
      height: 270px;
    }
  }
`