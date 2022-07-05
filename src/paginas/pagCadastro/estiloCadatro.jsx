import styled from 'styled-components';

export const ContainerFormCad = styled.div`
  width: 300px;
  height: 310px;
  box-shadow: 0px 0px 10px #aaa;
  background-color: #000000aa;
  border-radius: 10px;
  margin:150px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .divLogo img {
    width: 3rem;
    height: 3rem;
  }
  
  #janelaLogin {
    display: flex;
    flex-direction: column;
    background-color: #000000aa;
    width: 350px;
    height: 400px;
    margin: 200px auto 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #999;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form div:nth-child(1){
    margin-top: 20px;
  }

  .form div input{
    width: 280px;
    padding: 10px 5px;
    margin-bottom: 10px;
    font-size: 13px;
  }

  .form div #cadnome {
    text-transform: capitalize;
  }

  .form div button{
    padding: 10px 15px;
    margin-bottom: 5px;
    font-size: 13px;
  }
`;