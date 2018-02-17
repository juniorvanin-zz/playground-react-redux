// @flow

import { connect } from 'react-redux'
import ItemList from '../components/itemList'
import type { State } from './../../types/state'

const mapStateToProps = (state: State) => (
  {
    items: state.items.searchedItems.length !== 0
      ? state.items.searchedItems
      : state.items.availables,
    searchResultMessage: state.items.searchResultMessage
  }
)

const connector = connect(mapStateToProps)

export default connector(ItemList)
