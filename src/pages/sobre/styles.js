import styled from 'styled-components'

export const Line = styled.div`
  height: 3px;
  width: 300px;
  background-color: #000;
  margin: 0 auto;
  position: relative;
  top: -17px;
  z-index:-1
`

export const Container = styled.section`
  margin-top: 100px;

  .-title {
    text-align: center;

    h1{
      font-size: 2rem;
      background-color: white;
      display: inline-block;
      padding: 0 12px;
    }
  }

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

    &-title {
      text-align: center;
    }

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

      &-title {
        font-size: 1.3rem;
      }

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