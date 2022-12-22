import styled from 'styled-components'

export const Container = styled.div`

  .-mensagem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;

    &-img {
      width: 50%;
    }

    &-text {
      width: 500px;
      text-align: justify;
      padding: 1.8rem;
      line-height: 1.5rem;
    }
  }

  .-premios {
    margin-top: 70px;

    &-contentImgs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      margin: 30px auto;
      
      &-imgSingle {
        width: 22%;
      }
    }
  }


  @media (max-width: 1000px) {
    .-mensagem{
      flex-direction: column;

      &-img {
        width: 100%;
      }

      &-text {
        width: 100%;
        padding: 0;
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 700px) {
    .-premios {

      &-contentImgs {
        flex-direction: column;
        align-items: center;

        &-imgSingle {
          width: 200px;
          margin-bottom: 30px;

        }

      }
    }
  }

`