import styled from "styled-components";
import PortoDigImg from '../../imagens/portodigital.png';
import PortoDigImg2 from '../../imagens/portodigital2.jpg';

export const ContainerLoginGeral = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #777;
  background-image: url(${PortoDigImg2});
  background-repeat: no-repeat;
  background-size: cover;

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
  

  #janelaLogin #cimg{
    margin: auto;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  input {
    padding: 20px 3px;
    font-size: 11pt;
    margin:0px 20px 5px 20px;
  }

  #btnLogin {
    margin: 0px auto 15px;
  }

  #btnLogin button {
    padding: 10px 20px;
    font-size: 11pt;
    border-radius: 10px;
    background-color: #444;
    color:#00D9FF;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
  }

  #btnLogin button:hover {
    background-color: #00D9FF;
    color: #444;
  }
`;