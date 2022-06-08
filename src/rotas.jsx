import { Routes, Route } from "react-router-dom";
import EnderecoErro from "./paginas/pagErro/erroDeEndereco";
import Home from "./paginas/pagHome/home";
import Sobre from "./paginas/pagSobre/sobre";


export default function Rotas(){

  return(
    <Routes>    
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<EnderecoErro />}/>
      <Route path="/sobre" element={<Sobre />}/>
    </Routes>
  )
}