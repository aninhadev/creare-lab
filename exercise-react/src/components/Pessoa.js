function Pessoa({foto, nome, idade, profissao}){
  return (
    <div>
      <img src={foto} width='200px' alt={nome}  />
       <h2>Nome: {nome}</h2>
       <p>Idade: {idade}</p>
       <p>Profissão: {profissao}</p>
    </div>
  )
}

export default Pessoa;