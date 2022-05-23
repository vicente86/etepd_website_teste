import * as s from './estilohome';
import { ContainerGeral } from '../../estiloGeral/estilosGerais';
import NavBar from '../../componentes/navbar/navbar';
import Logo from '../../imagens/logoetepd.png';

export default function Home(){

  return(

    <ContainerGeral>
      <NavBar/>
      <s.TituloHome>Página home</s.TituloHome>
     
      <s.SessionHome>
        <s.TituloHome>Sessão 1</s.TituloHome>
        <img src={Logo} alt="imagem aqui" />
      </s.SessionHome>

      <s.SessionHome>
        <s.TituloHome>Sessão 2</s.TituloHome>
        
      </s.SessionHome>
      
    </ContainerGeral>
  )
} 