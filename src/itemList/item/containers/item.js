import Item from '../components/item'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  itemsAddedToCart: state.form.cart.itemsAdded
})

const connector = connect(mapStateToProps)

export default connector(Item)
