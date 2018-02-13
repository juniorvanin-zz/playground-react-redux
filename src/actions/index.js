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
