import NewTodo from '../components/newTodo'
import { connect } from 'react-redux'
import { updateNewTodo } from '../../../actions'


const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => {
  return {
    updateNewTodo: word => {
      dispatch(updateNewTodo(word))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(NewTodo)
