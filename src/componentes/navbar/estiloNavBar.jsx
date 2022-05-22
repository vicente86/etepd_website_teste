import styled from 'styled-components';

export const Nav = styled.nav`
  background-image: linear-gradient(#04458b,#3483d7);
  margin-bottom: 10px;
  ul {
    list-style:none;
    display: flex;
    padding: 10px 10px;
    align-items: center;
  }
  ul li {
    color:#000;
    padding: 0px 10px;
    cursor: pointer;

    .estiloLink {
      text-decoration: none;
      color:white;
      transition:0.8s all ease-in;
    }
    .estiloLink:hover {
      font-weight: bolder;
      transition:0.8s all ease-out;
    }
    img {
      width: 93px;
      height: 49px;
    }
  }

`;