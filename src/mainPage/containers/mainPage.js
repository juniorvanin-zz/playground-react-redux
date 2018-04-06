import { connect } from 'react-redux'
import MainPage from '../components/mainPage'

const mapStateToProps = state => (
  {
    items: state.items.availables
  }
)

const connector = connect(mapStateToProps)

export default connector(MainPage)
