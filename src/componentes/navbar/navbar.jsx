import * as s from './estiloNavBar'
import { Link } from 'react-router-dom'
import Logo from '../../imagens/logoetepd01.png'
import Seta from '../../imagens/setaa2.png'
import AcountIcon from '../../imagens/account_circle.svg'

export default function NavBar(){


  function listaMais(){
    let imgseta = document.querySelector('#imgseta');
    let ulmais = document.querySelector('#ulmais');

    ulmais.classList.toggle('mostraMais');
    imgseta.classList.toggle('giraSeta');
  }

  return(
    <s.Nav>
      <div>
        <Link to={"/"}><img src={Logo} /></Link>
      </div>

      <div className='containerlistaul'>
        <ul>
          <li><Link className='estiloLink' to={"/"}>Home</Link></li>
          <li><Link className='estiloLink' to={"/sobre"}>Sobre</Link></li>
          <li className='estiloLink' >Eventos</li>
          <li className='estiloLink dropdown1' onClick={() => listaMais()}> Mais <img src={Seta} id='imgseta'/>
          </li>
          <s.UlMais id='ulmais'>
              <li className='estiloLink2'>Local</li>
              <li className='estiloLink2'>Contatos</li>
              <li className='estiloLink2'>Ajuda</li>
              <li className='estiloLink2'>Termos e Privacidade</li>
          </s.UlMais>
          <li className='liimgconta'><img src={AcountIcon} alt="ícone de usuário" /></li>
        </ul>
        
      </div>
    </s.Nav>
  )
}