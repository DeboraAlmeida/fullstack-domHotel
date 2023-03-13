import pallete from "pallete";
import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  padding-top: 0px;
`

export const Form = styled.form`
  margin-top: 30px;

  button{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f5f5f5;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  svg{
    width: 50px;
    height: 50px;
    color: #ccc;
  }
`

export const TextChangePassword = styled.h4`
  margin-bottom: 25px;
  color: ${pallete.greenDefault};
  cursor: pointer;
  text-align: center;

  &:hover{
    text-decoration: underline;
  }
`