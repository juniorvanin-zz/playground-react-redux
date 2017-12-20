import React from 'react'

const TodoList = ({ todoList }) => (
  <div>
    <ul className="list-group">
      { todoList.todos.map(todo => <li className="list-group-item" key={ todo.id }> { todo.value } </li>) }
    </ul>
  </div>
)

export default TodoList
