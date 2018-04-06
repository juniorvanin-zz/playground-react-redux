const initState = {
  searchedItem: '',
  itemsAdded: []
}

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        itemsAdded: [...state.itemsAdded, action.id]

      }
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        itemsAdded: [...state.itemsAdded.filter(id => id !== action.id)]
      }
    default:
      return state
  }
}

export default formReducer
