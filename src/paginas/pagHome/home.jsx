import * as s from './estilohome';
import { ContainerGeral } from '../../estiloGeral/estilosGerais';
import NavBar from '../../componentes/navbar/navbar';
import Logo from '../../imagens/logoetepd01.png';
import Ca1 from '../../imagens/carrossel-a.jpeg';
import Ca2 from '../../imagens/carrossel-b.jpeg';
import Ca3 from '../../imagens/carrossel-c.jpeg';
import {useState, useEffect } from 'react';

export default function Home(){

  let c = 0;

  useEffect(() => {
    setInterval(() => {
      c++;
  
      let slide = document.querySelectorAll('.slide');
      let dcid = document.querySelector('#DivCarrosselID');
      let radio1 = document.querySelector('#radio1');
      let radio2 = document.querySelector('#radio2');
      let radio3 = document.querySelector('#radio3');

      if(c === 1 ){ dcid.scrollLeft = 0; radio1.checked = true}
      if(c === 2 ){ dcid.scrollLeft = slide[0].scrollWidth; radio2.checked = true}
      if(c >= 3 ){ dcid.scrollLeft = slide[0].scrollWidth * 2; c = 0; radio3.checked = true}

    }, 4000);
  }, []);
  
  
  return(

    <ContainerGeral>
      <NavBar/>
    
      <s.ContainerCarrossel>
        <div className='slides' id='DivCarrosselID'>
          
          <div className='slide first'>
            <img src={Ca1}/>
          </div>
          <div className='slide'>
            <img src={Ca2}/>
          </div>
          <div className='slide'>
            <img src={Ca3}/>
          </div>

          
        </div>

        <div className='containersRadios'>
          <input type="radio" name="radio-slides" id="radio1" checked />
          <input type="radio" name="radio-slides" id="radio2" />
          <input type="radio" name="radio-slides" id="radio3" />
        </div>
        
      </s.ContainerCarrossel>
      
      
    </ContainerGeral>
  )
} 