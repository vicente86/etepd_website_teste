import * as s from './estiloNavBar'
import { Link } from 'react-router-dom'
import Logo from '../../imagens/logoetepd01.png'
import Seta from '../../imagens/setaa2.png'
import AcountIcon from '../../imagens/account_circle.svg'
import { useEffect, useState } from 'react'



export default function NavBar(){

  let localEmail = "";let localNome = "";let localCodigo = "";

  const  [ taLogado , setTaLogado ] = useState(false);

  useEffect(() => {
    try { 
      localNome = localStorage.getItem("nomeUsu");
      localCodigo = localStorage.getItem("tipoUsu");
      localEmail = localStorage.getItem("emailUsu");
  
      
      if(localEmail.indexOf('@') !== -1){
        console.log("Tem alguma coisa")
        setTaLogado(true);
      }
  
    } catch (error) {}
  },[taLogado])

  function deslogar(){
    localStorage.setItem("nomeUsu", "");
    localStorage.setItem("emailUsu", "");
    localStorage.setItem("tipoUsu", "");
    
    setTaLogado(false)

    localCodigo = "";
    localCodigo = "";
    localNome = "";


  }

  function listaMais(){
    let imgseta = document.querySelector('#imgseta');
    let ulmais = document.querySelector('#ulmais');

    ulmais.classList.toggle('mostraMais');
    imgseta.classList.toggle('giraSeta');
  }

  function listaConta(){
    let uluser = document.querySelector('#uluser');
    uluser.classList.toggle('mostraMais');
  }

  return(
    <s.Nav>
      <div>
        <Link to={"/"}><img src={Logo} /></Link>
      </div>

      <div className='containerlistaul'>
        <ul>
          <li><Link className='estiloLink' to={"/"}>Home</Link></li>
          <li className='estiloLink' >Eventos</li>
          <li className='estiloLink dropdown1' onClick={() => listaMais()}> Mais <img src={Seta} id='imgseta'/>
          </li>
          <s.UlMais id='ulmais'>
              <li className='estiloLink2'>Local</li>
              <li className='estiloLink2'>Contatos</li>
              <li className='estiloLink2'>Ajuda</li>
              <li className='estiloLink2'>Termos e Privacidade</li>
          </s.UlMais>
          <li className='liimgconta' onClick={() => listaConta()}><img src={AcountIcon} alt="ícone de usuário" /></li>
          {
            taLogado !== false ?
          <s.UlUser id='uluser'>
              <li><Link to={""} className='estiloLink3'>Conta</Link></li>
              <li><Link to={""} className='estiloLink3'>Editar conta</Link></li>
              <li><Link to={""} className='estiloLink3' onClick={() => deslogar()}>Sair</Link></li>
          </s.UlUser>
            :
          <s.UlUser id='uluser'>
              <li><Link to={"/login"} className='estiloLink3'>Fazer Login</Link></li>
          </s.UlUser>
          }
        </ul>
        
      </div>
    </s.Nav>
  )
}