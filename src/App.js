import React from 'react';
import TodoList from './todoList/containers/todoList'
import NewTodo from './todoList/newTodo/containers/newTodo'

import './App.css';

const App = () => (
  <div className="container">
    <div className="todo-list">
      <div className="row justify-content-md-center">
        <div className="col-8">
          <NewTodo />
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-8">
          <TodoList />
        </div>
      </div>
    </div>
  </div>
)

export default App
