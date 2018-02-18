// @flow

import { connect } from 'react-redux'
import SearchResultsPage from '../components/searchResultsPage'
import type { State } from './../../types/state'

const mapStateToProps = (state: State) => (
  {
    items: state.items.searchedItems
  }
)

const connector = connect(mapStateToProps)

export default connector(SearchResultsPage)
