export const searchItemsByWord = word => {
  return {
    type: 'SEARCH_ITEM_BY_WORD',
    word
  }
}

export const updateSearchInput = word => {
  return {
    type: 'UPDATE_SEARCH_INPUT',
    word
  }
}

export const addToCart = id => {
  return {
    type: 'ADD_ITEM_TO_CART',
    id
  }
}

export const removeFromCart = id => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    id
  }
}
