// @flow

import { connect, type MapStateToProps } from 'react-redux'
import SearchResultsPage, { type Props } from '../components/searchResultsPage'
import type { State } from './../../types/state'

const mapStateToProps: MapStateToProps<State, {}, Props> = state => (
  {
    items: state.items.searchedItems
  }
)

const connector = connect(mapStateToProps)

export default connector(SearchResultsPage)
