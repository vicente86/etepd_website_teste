import * as s from './estiloNavBar'
import { Link } from 'react-router-dom'

export default function NavBar(){

  return(
    <s.Nav>
      <ul>
        <li><Link className='estiloLink' to={"/"}>Home</Link></li>
      </ul>
    </s.Nav>
  )
}