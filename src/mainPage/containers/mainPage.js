import { connect } from 'react-redux'
import MainPage from '../components/mainPage'
import { fetchProducts, fetchLatestGames } from './../../actions'

const mapStateToProps = state => (
  {
    items: state.items.availables,
    loading: state.items.availables.length === 0
  }
)

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => {
    dispatch(fetchProducts())
  },
  fetchLatestGames: () => {
    dispatch(fetchLatestGames())
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(MainPage)
