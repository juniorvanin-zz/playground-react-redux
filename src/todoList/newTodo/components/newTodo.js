import React from 'react'

const handleChange = (updateNewTodo) => (evt) => {
  evt.preventDefault()
  updateNewTodo(evt.target.value)
}


const NewTodo = ({ todoList, updateNewTodo }) => (
  <form>
    <div className="form-group">
     <label htmlFor="newTodo">Enter a new todo</label>
     <input
      type="text"
      className="form-control"
      id="newTodo"
      placeholder="clean the house"
      onChange={ handleChange(updateNewTodo) }
      value={ todoList.newTodo }/>
    </div>
   </form>
)

export default NewTodo
