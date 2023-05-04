import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import {api} from "../../services/api";

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import { FiMail, FiLock, FiUser, } from 'react-icons/fi'

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

    function handleSignUp() {
    if(!name || !email || !password) {
     return alert("Preencha todos os campos!")
    }

     api.post("/users", {name, email, password})
     .then(() => {
       alert("Usuário cadastrado com sucesso!");
       navigate("/");
     })

     .catch(error => {
       if(error.response) {
        alert(error.response.data.message)
       }else {
        alert("Não foi possível cadastar")
       }
     });
  }
  
  return (
  <Container>
   <Form>
     <h1>RocketMovie</h1>
      <p>Aplicação para acompanhar tudo que assistir</p>

      <h2>Crie sua conta</h2>

      <Input
        placeholder= "Nome"
        type= "text"
        icon={FiUser}
        onChange={e => setName(e.target.value)} 
      />   

      <Input
        placeholder= "E-mail"
        type= "text"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}
      />   

      <Input
        placeholder= "Senha"
        type= "password"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
      /> 

      <Button title="Cadastar" onClick={handleSignUp}/>
       

      <Link to="/">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.32455e-08 8.5C1.32455e-08 8.00908 0.397969 7.61111 0.888889 7.61111H15.1111C15.602 7.61111 16 8.00908 16 8.5C16 8.99092 15.602 9.38889 15.1111 9.38889H0.888889C0.397969 9.38889 1.32455e-08 8.99092 1.32455e-08 8.5Z" fill="#FF859B"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.62854 0.76035C8.97567 1.10748 8.97567 1.6703 8.62854 2.01743L2.14597 8.5L8.62854 14.9826C8.97567 15.3297 8.97567 15.8925 8.62854 16.2397C8.28141 16.5868 7.71859 16.5868 7.37146 16.2397L0.26035 9.12854C-0.0867832 8.78141 -0.0867832 8.21859 0.26035 7.87146L7.37146 0.76035C7.71859 0.413217 8.28141 0.413217 8.62854 0.76035Z" fill="#FF859B"/>
       </svg>
        
       Voltar para o login
      </Link> 
    </Form>

     <Background/>
  </Container>
  );
  
} 