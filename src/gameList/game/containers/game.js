import { connect } from 'react-redux'
import Game from '../components/game'

const mapStateToProps = state => ({
  itemsAddedToCart: state.shoppingCart.itemsAdded
})

const connector = connect(mapStateToProps)

export default connector(Game)
