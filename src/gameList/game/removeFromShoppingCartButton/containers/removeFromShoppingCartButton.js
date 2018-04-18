import { connect } from 'react-redux'
import RemoveFromShoppingCartButton from '../components/removeFromShoppingCartButton'
import { removeFromCart } from '../../../../actions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  removeFromCart: (id) => {
    dispatch(removeFromCart(id))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(RemoveFromShoppingCartButton)
