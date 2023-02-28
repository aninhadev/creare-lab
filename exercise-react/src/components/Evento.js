function Evento({numero}) {

  function meuEvento(){
   alert(`Fui ativado, meu chapa!! ${numero}`)
  }


  return (
    <div>
      <p>Clique aqui pra dispara o evento</p>
        <button onClick={meuEvento}>Ativar</button>
        </div>
  );
}

export default Evento;