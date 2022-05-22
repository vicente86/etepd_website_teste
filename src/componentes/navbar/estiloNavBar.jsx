import styled from 'styled-components';

export const Nav = styled.nav`
  background-image: linear-gradient(#04458b,#3483d7);
  margin-bottom: 10px;
  ul {
    list-style:none;
    display: flex;
    padding: 30px 10px;
  }
  ul li {
    color:#000;
    padding: 5px 10px;
    cursor: pointer;

    .estiloLink {
      text-decoration: none;
      color:white;
      transition: all 0.8s ease;
    }
    .estiloLink:hover {
      font-weight: bolder;
      transition: all 0.8s ease;
    }
  }

`;