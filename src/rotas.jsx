import { Routes, Route } from "react-router-dom";
import Cadastro from "./paginas/pagCadastro/cadastro";
import EnderecoErro from "./paginas/pagErro/erroDeEndereco";
import Home from "./paginas/pagHome/home";
import Login from "./paginas/pagLogin/login";
import Sobre from "./paginas/pagSobre/sobre";


export default function Rotas(){

  return(
    <Routes>    
      <Route path="/" element={<Home />}/>
      <Route path="/sobre" element={<Sobre />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="*" element={<EnderecoErro />}/>
    </Routes>
  )
}