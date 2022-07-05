import * as s from './estilohome';
import { ContainerGeral } from '../../estiloGeral/estilosGerais';
import NavBar from '../../componentes/navbar/navbar';
import Logo from '../../imagens/logoetepd01.png';
import Ca1 from '../../imagens/carrossel-a.jpeg';
import Ca2 from '../../imagens/carrossel-b.jpeg';
import Ca3 from '../../imagens/carrossel-c.jpeg';
import Fig1 from '../../imagens/figura1.svg';
import { useState, useEffect } from 'react';
import FooterGeral from '../../componentes/footer/footerC';


export default function Home(){

  let c = 1;
  let ms = 5000;
  

  useEffect(() => {
    
    setInterval(() =>{
      
      let imgCS = document.querySelector('#imgCS')
      if(c === 1){imgCS.src = Ca1; }
      if(c === 2){imgCS.src = Ca2; }
      if(c === 3){imgCS.src = Ca3; c = 0;}
      c++;
    }, ms)
    
  }, []);
  
  




  return(

    <ContainerGeral>
      <NavBar/>
    
      
      <s.ContainerCarrossel>
        <div className='divimagens'>
          <div>
            <img src={Ca1} alt="" id="imgCS" onClick={(e) => {console.log(e);}}/>
          </div>
        </div>
        
      </s.ContainerCarrossel>
      

      <s.SessaoInfor1>

        <div><h2>Subsequênte</h2></div>
        <div><h3>Serviços que os alunos podem obter da secretaria</h3></div>
        <div className='containerUl'>
          <ul>
            <li>Informações sobre - carteira de meia passagem/vem livre</li>
            <li>Declaração de vínculo</li>
            <li>Realizar trancamento</li>
            <li>Realizar cancelamento</li>
            <li>Receber - carteira de meia passagem/vem livre</li>
            <li>Receber - a carteira de estudante</li>
            <li>Entrega do kit escolar</li>
            <li>Entrega do fardamento</li>
            <li>Transferência de escola</li>
            <li>Acesso ao SIEPE</li>
            <li>Desbloquear o SIEPE</li>
          </ul>
        </div>

        <div><h3>Professores(as) do Subsequente</h3></div>
        <div className='containerUl'>
          <ul>
            <li>Desenvolvimento de Sistemas</li>
            <ul>
              <li>Waldeck</li>
              <li>Pedro</li>
              <li>Fábio</li>
              <li>Clóvis</li>
              <li>Sandra - obs.: só no 1º módulo</li>
            </ul>
            
          </ul>

          <ul>
            <li>Multimídia</li>
            <ul>
              <li>Bianca</li>
              <li>Luciane</li>
              <li>Waléria</li>
            </ul>
          </ul>

        </div>

        <div><h3>Ambientes</h3></div>
        <div className='containerUl'>
          <ul>
            <li>Térreo</li>
            <ul>
              <li>Banheiros - 2</li>
              <li>Laboratório</li>
              <li>Refeitório</li>
              <li>Secretaria</li>
              <li>Auditório</li>
              <li>Salas de aula - 1</li>
            </ul>
            
          </ul>

          <ul>
            <li>Mesanino</li>
            <ul>
              <li>Banheiros - 2</li>
              <li>Laboratório</li>
              <li>Sala dos professores</li>
              <li>Sala da coordenação</li>
            </ul>
          </ul>

          <ul>
            <li>1º Andar</li>
            <ul>
              <li>Quadra de esportes</li>
              <li>Salas de aula</li>
              <li>Banheiros - 2</li>
            </ul>
          </ul>

          <ul>
            <li>2º Andar</li>
            <ul>
              <li>Salas de aula</li>
              <li>Banheiros - 2</li>
            </ul>
          </ul>

          <ul>
            <li>Quantidade de salas usadas no subsequente</li>
            <ul>
              <li>6 salas para os alunos dos 1º, 2º e 3º módulos.</li>
            </ul>
          </ul>
          
        </div>
      </s.SessaoInfor1>
        

      {/* <s.SessaoCursos>

        <img src={Fig1} alt="SVG externo"/>

        <div className='curso1'>
          <h3>Técnico em Desenvolvimento de Sistemas</h3>
        </div>

        <div className='curso2'>
          <h3>Técnico em Multimídia</h3>
        </div>

      </s.SessaoCursos> */}
      
      
      <FooterGeral />

    </ContainerGeral>
  )
} 