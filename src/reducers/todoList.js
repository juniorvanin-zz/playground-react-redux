const initState = {
    newTodo: 'Clean the house',
    todos: [
      { id: 1, value: 'ABC' },
      { id: 2, value: 'DEF' },
      { id: 3, value: 'GHI' }
    ]
}

const todoList = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_TODO':
     return {
       ...state,
       newTodo: action.word
    }
    default:
      return state
  }
}

export default todoList
