import { connect } from 'react-redux'
import AddToShoppingCartButton from '../components/addToShoppingCartButton'
import { addToCart } from './../../../../actions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  addToCart: (id) => {
    dispatch(addToCart(id))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(AddToShoppingCartButton)
