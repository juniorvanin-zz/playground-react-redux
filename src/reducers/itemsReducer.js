const initState = {
  searchedItems: [],
  availables: [],
  searchResultMessage: ''
}

const itemsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SEARCH_ITEM_BY_WORD':
    {
      const searchedItems = state.availables.filter(item => item.title.includes(action.word))
      return {
        ...state,
        searchedItems
      }
    }
    case 'RECEIVE_PRODUCTS':
    {
      return {
        ...state,
        availables: action.products
      }
    }
    default:
      return state
  }
}

export default itemsReducer
