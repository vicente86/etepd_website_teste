import styled from "styled-components";

export const FooterP = styled.footer`
  color:#fff;
  background-color: #3B3B3B;
  width: 100vw;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    padding: 20px;
  }
  div h2{
    text-align: center;
  }
  div p{
    padding: 7px 5px;
  }
  div a{
    color: #fff;
  }
  .divmapa {
    padding: 20px 0px;
  }
  div p img{
    width: 1.5rem;
    height: 1.5rem;
    padding: 5px;
    background-color: #fff;
    border-radius: 50%;
  }

  .divmapaframe{
    width: 200px;
    height: 200px;
    margin-right: 30px;
  }
  
`