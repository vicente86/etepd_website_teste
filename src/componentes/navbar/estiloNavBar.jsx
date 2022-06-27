import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  div:nth-child(1){
    width: 50%;
    img {
      width: 250px;
      height: 69px;
    }
  }

  div:nth-child(2){
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-top: 5px;
  }

  ul {
    list-style:none;
    display: flex;
    padding: 10px 10px;
    align-items: center;
  }
  ul li {
    padding: 0px 25px;
    cursor: pointer;
    margin-right: 5px;

    .estiloLink {
      text-decoration: none;
      color: #386074;
      font-weight: bold;
    }

  }

  ul li img {
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 10px;
    transition: all 1s ease;
    border-radius: 50%;
  }

  .dropdown1{
    display: flex;
    span{
      position: absolute;
      top: 30px;
      right: 50px;
      z-index: 1000;
    }
  }

  .mostraMais {
    visibility: visible;
    opacity: 1;
    transition: all 1s ease;
  }

  .giraSeta {
    transform: rotate(-180deg);
    transition: all 1s ease;
  }
`;

export const UlMais = styled.ul`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 5px;
  top: 110px;
  width: 250px;
  background-color: #fff;
  box-shadow:0px 0px 4px #aaa;
  border-radius: 10px;
  opacity: 0;
  transition: all 1s ease;

  .estiloLink2 {
    text-decoration: none;
    padding:20px 5px;
    color: #386074;
    font-weight: bold;
  }

`;