// @flow

import type { ApplicationState } from './../types/state'
import type { ApplicationActions } from './../types/actions'

const initState = {
  displayShoppingCart: false
}

const applicationReducer = (state: ApplicationState = initState, action: ApplicationActions) => {
  switch (action.type) {
    case 'TOGGLE_SHOPPING_CART':
      return {
        ...state,
        displayShoppingCart: !state.displayShoppingCart
      }
    default:
      return state
  }
}

export default applicationReducer
