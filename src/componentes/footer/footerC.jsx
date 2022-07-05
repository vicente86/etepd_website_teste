import * as s from "./estiloFooterC";
import Telefone from "../../imagens/telefone.svg";
import Carta from "../../imagens/carta.svg";
import Local from "../../imagens/local.svg";
import Facebook from "../../imagens/facebook.png";
import Instagram from "../../imagens/instagram.png";

export default function FooterGeral(){

  return(
    <>
      <s.FooterP>
        <div>
          <h2>Contatos</h2>
          <p><img src={Telefone} alt="foto do telefone"/> +55 81 99999-9999</p>
          <p><img src={Carta} alt="foto de carta"/> eteportodigital.com</p>
          <p><img src={Local} alt="foto do gps"/> Av. Rio Branco, 193 - Recife, PE, 50000-000</p>
        </div>

        <div>
          <h2>Redes Sociais</h2>
          <p><img src={Facebook} alt="foto do face"/> facebook.com/eteportodigital</p>
          <p><img src={Instagram} alt="foto do insta"/> instagram.com/eteportodigital</p>
        </div> 

        <div>
          <h2>Como chegar?</h2>
          <div className="divmapaframe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3797035358734!2d-34.875479785476735!3d-8.062696294194724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18bc0ffbac07%3A0xb75d6c68425c2da!2sEscola%20T%C3%A9cnica%20Estadual%20Porto%20Digital!5e0!3m2!1spt-BR!2sbr!4v1657013584251!5m2!1spt-BR!2sbr" width="200" height="200" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
            
        </div>
      </s.FooterP>
      <div style={{backgroundColor: "#416872", height: '20px'}}></div>
    </>
  )
}