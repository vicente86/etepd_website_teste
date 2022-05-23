import * as s from './estiloNavBar'
import { Link } from 'react-router-dom'
import Logo from '../../imagens/logoetepd.png'

export default function NavBar(){

  return(
    <s.Nav>
      <ul>
        <li><Link className='estiloLink' to={"/"}><img src={Logo} /></Link></li>
        <li><Link className='estiloLink' to={"/"}>Home</Link></li>
      </ul>
    </s.Nav>
  )
}