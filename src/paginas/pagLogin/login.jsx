import React from "react";
import { ContainerGeral } from "../../estiloGeral/estilosGerais"
import * as s from "./estiloLogin";
import LogoTransparente from "../../imagens/logo-etepd-versao-branca.png"
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";



export default function Login(){

  const navigate = useNavigate();
 


  async function fazerLogin(){

    let nome = document.querySelector("#lnome").value.toLowerCase().trim();
    let email = document.querySelector("#lemail").value.trim();
    let senha = document.querySelector("#lsenha").value.trim();
    

    let consulta = "";
    let tem = false;
    let objU = {};

    if(nome === "" || email === "" || senha === ""){

      alert("Todos os campos precisam ser preenchidos");

    }else if(email.indexOf('@') === -1){
      
      alert("Insira um email válido");

    }else{
 
      try {
        consulta = await Axios.get("http://localhost:3001/pesquisa_todos_usuarios");  
      } catch (error) {
        console.log("Rota não existe ou servidor não está online")
      }
      
  
      if(consulta !== ""){
        
        consulta.data.forEach(e => {
          if(e.nome === nome && e.email === email && e.senha === senha){
            tem = true;
            objU = {
              id: e.id,
              nome: e.nome,
              email: e.email,
              codigo: e.codigo,
            }
          }
        });
  
        // tem registro no banco de dados
        if(tem){
          localStorage.setItem('nomeUsu', objU.nome)
          localStorage.setItem('emailUsu', objU.email)
          localStorage.setItem('tipoUsu', objU.codigo)
          navigate("/");
        }else{
          localStorage.setItem('nomeUsu', "")
          localStorage.setItem('emailUsu', "")
          localStorage.setItem('tipoUsu', "")
        }
  
      }else{
        alert("Servidor fora do ar ou\nproblema com a consulta do banco de dados")
      }

    }


  }



  return (
    <ContainerGeral>
      <s.ContainerLoginGeral>
        <div id="janelaLogin">
          <div id="cimg">
            <img src={LogoTransparente} alt="logo do etepd" />
          </div>
          <input type="text" name="nome" id="lnome" placeholder="Usuário" />
          <input type="email" name="email" id="lemail" placeholder="Login:  exemplo@gmail.com" />
          <input type="password" name="senha" id="lsenha" placeholder="Senha" />
          <div style={{textAlign: 'center', padding: '10px 0px'}}>
            <div style={{paddingBottom: '10px'}}><Link to={""} style={{color: '#fff'}}>Esqueci minha senha</Link></div>
            <div><Link to={"/cadastro"} style={{color: '#fff'}}>Não tenho cadastro</Link></div>
          </div>
          <div id="btnLogin">
            <button onClick={() => fazerLogin()}>Entrar</button>
          </div>
        </div>
      </s.ContainerLoginGeral>
    </ContainerGeral>
  )


}