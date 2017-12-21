import uuidv4 from 'uuid/v4'

export const updateNewTodo = word => {
  return {
    type: 'UPDATE_NEW_TODO',
    word
  }
}

export const saveTodo = todo => {
  return {
    type: 'SAVE_TODO',
    todo: {
      id: uuidv4(),
      value: todo
    }
  }
}
