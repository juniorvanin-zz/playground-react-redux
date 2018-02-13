import ItemList from '../components/itemList'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../actions'

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id))
    },
    removeFromCart: id => {
      dispatch(removeFromCart(id))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(ItemList)
