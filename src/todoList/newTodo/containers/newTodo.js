import NewTodo from '../components/newTodo'
import { connect } from 'react-redux'
import { updateNewTodo, saveTodo } from '../../../actions'

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => {
  return {
    updateNewTodo: todo => {
      dispatch(updateNewTodo(todo))
    },
    saveTodo: newTodo => {
      dispatch(saveTodo(newTodo))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(NewTodo)
