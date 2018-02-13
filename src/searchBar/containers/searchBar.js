import SearchBar from '../components/searchBar'
import { connect } from 'react-redux'
import { searchItemsByWord, updateSearchInput } from '../../actions'

const mapStateToProps = (state) => {
  return {
    searchInput: state.form.searchedItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchItemsByWord: word => {
      dispatch(searchItemsByWord(word))
    },
    updateSearchInput: word => {
      dispatch(updateSearchInput(word))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(SearchBar)
