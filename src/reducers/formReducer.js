const initState = {
    searchedItem: "",
    cart: {
      itemsAdded: []
    }
}

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cart: {
          itemsAdded: [ ...state.cart.itemsAdded, action.id ]
        }
    }
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cart: {
          itemsAdded: [ ...state.cart.itemsAdded.filter(item =>  item !== action.id) ]
        }
    }
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
