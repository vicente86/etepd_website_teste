import { useState } from "react";
import { ContainerGeral } from "../../estiloGeral/estilosGerais";
import * as s from "./estiloCadatro";
import Logo from "../../imagens/logo-etepd-versao-branca.png";
import Axios from "axios";


export default function Cadastro(){

  const [values, setValues] = useState();

  const capturaValores = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const cadastra = async () => {

    let pesquisaTodos = await Axios.get("http://localhost:3001/pesquisa_todos_usuarios");

    let tem = false;
    pesquisaTodos.data.forEach(e => {
      if(e.nome === values.nome && e.email === values.email){
        tem = true;
      }
    });

    if(tem){
      alert("Já existe um usuário com este nome e com este email")
    }else{
      Axios.post("http://localhost:3001/cadastrar_usuario", {
      nome: values.nome,
      email: values.email,
      senha: values.senha
      })
      
      alert("Cadastrado com sucesso")
    }

  }

  return(
    <ContainerGeral style={{height: '100vh', backgroundImage: 'linear-gradient(#346EF8, #34E4F8)'}}>
      <s.ContainerFormCad>
        <div className="divLogo">
          <img src={Logo} alt="" /> 
        </div>
        <div className="form">
          <div>
            <input type="text" name="nome" id="cadnome" placeholder="nome completo" required onChange={capturaValores}/>
          </div>
          <div>
            <input type="email" name="email" placeholder="email" required onChange={capturaValores}/>
          </div>
          <div>
            <input type="password" name="senha" placeholder="senha" required onChange={capturaValores}/>
          </div>
          <div>
            <button onClick={() => cadastra()}>Cadastrar</button>
          </div>
        </div>  
      </s.ContainerFormCad>
    </ContainerGeral>
  )
}