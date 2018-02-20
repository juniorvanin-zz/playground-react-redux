// @flow

import type { ShoppingCartState } from './../types/state'
import type { FormActions } from './../types/actions'

const initState: ShoppingCartState = {
  searchedItem: '',
  itemsAdded: []
}

const formReducer = (state: ShoppingCartState = initState, action: FormActions) => {
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
