import { connect } from 'react-redux'
import Layout from '../components/layout'
import { toggleShoppingCart } from '../../actions'

const mapStateToProps = state => (
  {
    displayShoppingCart: state.application.displayShoppingCart,
    items: state.items.availables.filter(item => state.shoppingCart.itemsAdded.includes(item.id))
  }
)

const mapDispatchToProps = dispatch => ({
  toggleShoppingCart: () => {
    dispatch(toggleShoppingCart())
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Layout)
