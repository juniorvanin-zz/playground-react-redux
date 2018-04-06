import { connect } from 'react-redux'
import Item from '../components/item'

const mapStateToProps = state => ({
  itemsAddedToCart: state.shoppingCart.itemsAdded
})

const connector = connect(mapStateToProps)

export default connector(Item)
