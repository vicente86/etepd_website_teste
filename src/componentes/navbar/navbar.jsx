import * as s from './estiloNavBar'
import { Link } from 'react-router-dom'
import Logo from '../../imagens/logoetepd01.png'
import Seta from '../../imagens/setaa2.png'

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

      <div>
        <ul>
          <li><Link className='estiloLink' to={"/"}>Home</Link></li>
          <li><Link className='estiloLink' to={"/sobre"}>Sobre</Link></li>
          <li className='estiloLink' >Eventos</li>
          <li className='estiloLink'>Projetos</li>
          <li className='estiloLink dropdown1' onClick={() => listaMais()}> Mais <img src={Seta} id='imgseta'/>
            <s.UlMais id='ulmais'>
              <li className='estiloLink2'>Local</li>
              <li className='estiloLink2'>Contatos</li>
              <li className='estiloLink2'>Ajuda</li>
              <li className='estiloLink2'>Termos e Privacidade</li>
            </s.UlMais>
          </li>
        </ul>
      </div>
    </s.Nav>
  )
}