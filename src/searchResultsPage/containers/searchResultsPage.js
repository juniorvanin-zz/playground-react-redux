import { connect } from 'react-redux'
import SearchResultsPage from '../components/searchResultsPage'

const mapStateToProps = state => (
  {
    items: state.items.searchedItems
  }
)

const connector = connect(mapStateToProps)

export default connector(SearchResultsPage)
