import React from 'react';
import TodoList from './todoList/containers/todoList'
import './App.css';

const App = () => (
  <div className="container">
    <div className="todo-list">
      <div className="row">
        <div className="col-6">
          <TodoList />
        </div>
      </div>
    </div>
  </div>
)

export default App
