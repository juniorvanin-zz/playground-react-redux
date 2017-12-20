const initState = {
    todos: [
      { id: 1, value: 'ABC' },
      { id: 2, value: 'DEF' },
      { id: 3, value: 'GHI' }
    ]
}

const todoList = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default todoList
