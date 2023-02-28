import PropsTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {

  return(
  <>
    <li>
      {marca} - {ano_lancamento}
    </li>
  

  </>
  )
}

Item.propTypes = {
  marca: PropsTypes.string.isRequired,
  ano_lancamento: PropsTypes.number,
}

Item.defaultProps = {
  marca: 'Faltou a Marca',
  ano_lancamento: 0,

}

export default Item;