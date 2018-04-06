const initState = {
  displayShoppingCart: false
}

const applicationReducer = (state = initState, action) => {
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
