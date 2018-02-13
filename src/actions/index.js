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
