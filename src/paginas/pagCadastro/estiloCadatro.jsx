import styled from 'styled-components';

export const ContainerFormCad = styled.div`
  width: 300px;
  height: 310px;
  box-shadow: 0px 0px 10px #aaa;
  background-color: #C5D8DA;
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