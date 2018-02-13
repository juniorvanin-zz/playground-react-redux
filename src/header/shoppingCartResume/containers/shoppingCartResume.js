import ShoppingCartResume from '../components/shoppingCartResume'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    itemsQuantity: state.form.cart.itemsAdded.length,
  }
}

const connector = connect(mapStateToProps)
export default connector(ShoppingCartResume)
