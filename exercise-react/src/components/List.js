import Item from "./Item";


function List() {

  return(
    <>
    <h1>Lista De Coisas que eu quero</h1>
   <ul>
    <Item marca="Mercedes" ano_lancamento={1978} />
    <Item marca="Ford " ano_lancamento={2010} />
    <Item marca="Fiat" />
    <Item marca=" " ano_lancamento={0} />

   </ul>
   
    </>
      
  )

}


export default List;