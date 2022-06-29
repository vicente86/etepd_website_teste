import { ContainerGeral } from "../../estiloGeral/estilosGerais"
import * as s from "./estiloLogin";
import LogoTransparente from "../../imagens/logo-etepd-versao-branca.png"



export default function Login(){

  return(
    <ContainerGeral>
      <s.ContainerLoginGeral>
        <div id="janelaLogin">
          <div id="cimg">
            <img src={LogoTransparente} alt="" />
          </div>
          <input type="text" placeholder="Usuário"/>
          <input type="email" placeholder="Login:  exemplo@gmail.com"/>
          <input type="password" placeholder="Senha"/>
          <div style={{textAlign: 'center', padding: '10px 0px'}}>
            <a href="#" style={{color: '#fff'}}>Esqueci minha senha</a>
            <br />
            <a href="#" style={{color: '#fff'}}>Não tenho cadastro</a>  
          </div>
          <div id="btnLogin">
            <button>Entrar</button>
          </div>
        </div>
      </s.ContainerLoginGeral>
    </ContainerGeral>
  )
}