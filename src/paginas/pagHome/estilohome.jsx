import styled from 'styled-components'

export const SessionHome = styled.section`
  background-color: #c5c5c5;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-bottom: 10px; 
  img{
    width: 250px;
    height: 69px;
  }
`;

export const ContainerCarrossel = styled.div`
  overflow-x: hidden;
  .containersRadios {
    width: 100vw;
    background-color: #00000044;
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
  }

  .containersRadios input{
    margin-right: 10px;
  }

  /* #radio1{
    
    position: absolute;
    left: 45%;
  }
  #radio2{
    
    position: absolute;
    left: 50%;
  }
  #radio3{
    
    position: absolute;
    left: 55%;
  } */

  .slide img{
    width: 100vw;
    height: auto;
  }

  .slides {
    width: 100vw;
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }


`;


export const TituloHome = styled.h1`
  color: #000;
  text-align: center;
  padding: 10px 0;
  font-family: PoiretOne;
`