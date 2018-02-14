import RemoveFromShoppingCartButton from '../components/removeFromShoppingCartButton'
import { connect } from 'react-redux'
import { removeFromCart } from '../../../../actions'

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => {
      dispatch(removeFromCart(id))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(RemoveFromShoppingCartButton)
