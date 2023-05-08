import { useState } from "react";


function Form() {

  function cadastrarUsuario(e) {
    e.preventDefault()
 
    alert(` Usuario cadastrado! Nome : ${name}  senha : ${password} `)
  }


  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password" >Senhaa</label>
          <input type="pssword" id="password" placeholder="Digite a sua senha"  onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );

}

export default Form;
