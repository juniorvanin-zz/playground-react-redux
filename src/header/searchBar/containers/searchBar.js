// @flow

import { connect } from 'react-redux'
import SearchBar from '../components/searchBar'
import { searchItemsByWord, updateSearchInput } from '../../../actions'
import type { State } from './../../../types/state'


const mapStateToProps = (state: State) => ({
  searchInput: state.form.searchedItem
})

const mapDispatchToProps = dispatch => ({
  searchItemsByWord: (word) => {
    dispatch(searchItemsByWord(word))
  },
  updateSearchInput: (word) => {
    dispatch(updateSearchInput(word))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(SearchBar)
