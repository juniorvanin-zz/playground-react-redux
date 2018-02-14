import AddToShoppingCartButton from '../components/addToShoppingCartButton'
import { connect } from 'react-redux'
import { addToCart } from '../../../../actions'

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(AddToShoppingCartButton)
