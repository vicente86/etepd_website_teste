import * as s from './estilohome';
import { ContainerGeral } from '../../estiloGeral/estilosGerais';
import NavBar from '../../componentes/navbar/navbar';
import Logo from '../../imagens/logoetepd01.png';
import Ca1 from '../../imagens/carrossel-a.jpeg';
import Ca2 from '../../imagens/carrossel-b.jpeg';
import Ca3 from '../../imagens/carrossel-c.jpeg';
import Fig1 from '../../imagens/figura1.svg';
import { useState, useEffect } from 'react';


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

      </s.SessaoInfor1>
        

      <s.SessaoCursos>

        <img src={Fig1} alt="SVG externo"/>

        <div className='curso1'>
          <h3>Técnico em Desenvolvimento de Sistemas</h3>
        </div>

        <div className='curso2'>
          <h3>Técnico em Multimídia</h3>
        </div>

      </s.SessaoCursos>
      
        

    </ContainerGeral>
  )
} 