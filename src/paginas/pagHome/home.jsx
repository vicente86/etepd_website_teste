import * as s from './estilohome'
import { ContainerGeral } from '../../estiloGeral/estilosGerais'
import NavBar from '../../componentes/navbar/navbar'
import Logo from '../../componentes/imagens/logoetepd.png'

export default function Home(){

  return(

    <ContainerGeral>
      <NavBar/>
      <s.TituloHome>Página home</s.TituloHome>
     
      <s.SessionHome1>
        <img src={Logo} alt="imagem aqui" />
      </s.SessionHome1>
      
    </ContainerGeral>
  )
} 