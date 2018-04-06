import { connect } from 'react-redux'
import ShoppingCartResume from '../components/shoppingCartResume'
import { toggleShoppingCart } from '../../../../actions'

const mapStateToProps = state => ({
  items: state.items.availables.filter(item => state.shoppingCart.itemsAdded.includes(item.id))
})

const mapDispatchToProps = dispatch => ({
  toggleShoppingCart: () => {
    dispatch(toggleShoppingCart())
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(ShoppingCartResume)
