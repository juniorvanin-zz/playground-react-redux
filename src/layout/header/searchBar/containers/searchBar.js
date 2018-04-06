import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SearchBar from '../components/searchBar'
import { searchItemsByWord } from '../../../../actions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  searchItemsByWord: (word) => {
    dispatch(searchItemsByWord(word))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))
