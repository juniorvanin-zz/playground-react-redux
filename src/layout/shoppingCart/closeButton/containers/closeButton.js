import { connect } from 'react-redux'
import { toggleShoppingCart } from '../../../../actions'
import CloseButton from '../components/closeButton'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  toggleShoppingCart: () => {
    dispatch(toggleShoppingCart())
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(CloseButton)
