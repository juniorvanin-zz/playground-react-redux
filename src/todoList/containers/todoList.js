import TodoList from '../components/todoList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => state

const connector = connect(mapStateToProps)
export default connector(TodoList)
