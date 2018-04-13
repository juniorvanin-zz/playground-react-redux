import { connect } from 'react-redux'
import MainPage from '../components/mainPage'
import { fetchProducts } from './../../actions'

const mapStateToProps = state => (
  {
    items: state.items.availables
  }
)

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => {
    dispatch(fetchProducts())
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(MainPage)
