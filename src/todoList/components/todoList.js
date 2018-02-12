import React from 'react'

const TodoList = ({ todoList }) => (
  <form>
    {
      todoList.todos.map(todo =>
        (
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value={ todo.id } />
              { todo.value }
            </label>
          </div>
        )
      )
    }
  </form>
)

export default TodoList
