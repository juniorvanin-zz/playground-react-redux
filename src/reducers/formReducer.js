// @flow
import type { FormState } from './../types/state'
import type { FormActions } from './../types/actions'

const initState: FormState = {
    searchedItem: "",
    cart: {
      itemsAdded: []
    }
}

const formReducer = (state: FormState = initState, action: FormActions) => {
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
          itemsAdded: [ ...state.cart.itemsAdded.filter(id => id !== action.id) ]
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
