import styled from 'styled-components'

// Carrossel
export const ContainerCarrossel = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  
  #imgCS {
    width: 100vw;
    height: auto;
    transition: all 2s ease;
  }

`;

export const SessaoInfor1 = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 15px 0px 15px 0px;

  h2, h3 {
    text-align: center;
    padding: 15px 0px;
    margin: 0px;
    font-family: PoiretOne;
    font-weight: bolder;
  }
  h3 {
    background-color:#587FEB;
    color: #fff;
    margin: 10px 0px;
  }
  ul {
    padding-left: 20px;
  }
  ul ul {
    padding: 10px;
  }
`;

export const SessaoCursos = styled.section`
  width: 100vw;
  height: 600px;
  background-color: #0B3C76;
  position: relative;
  display: flex;
  justify-content: space-around;

  img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    position: absolute;
    left: 45%;
    top:-80px;
  }

  /* .curso1{
    margin-right: 100px;
  } */

  .curso1, .curso2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ddd;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-top: 200px;
  }

  .curso1 h3, .curso2 h3 {
    text-align: center;
    margin-top: 80px;
  }

`;