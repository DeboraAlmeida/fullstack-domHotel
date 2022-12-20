import styled from 'styled-components'
import { pallete } from '../../../pallete'


export const Header = styled.header`

  .-body{
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    align-items: center;
    border-bottom: 2px solid ${pallete.gold};

    &-left{
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-img{
        width: 90px;
        margin-right: 8px;
      }
    }

    &-right{
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 300px;
      
      &-button{
        font-size: 15px;
        box-shadow: 5px 5px 5px #a0a0a0ea;
      }
    }

  }

  .-navbar{
    background-color: ${pallete.greenDark};
    padding: 13px;
  }



  @media (max-width: 768px) {
    .-body{

      &-left{
        flex-direction: column;

        &-img{
          margin-bottom: 10px
        }
      }

      &-right{
        display: none;
      }
    }

    .-navbar div{
      display: none;
    }
  }
`