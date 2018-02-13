const initState = {
    searchedItem: ""
}

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_INPUT":
      return {
        ...state,
        searchedItem: action.word
      }
    default:
      return state
  }
}

export default formReducer
