// @flow

export type AddItemToCartAction = {
  type: 'ADD_ITEM_TO_CART',
  id: number
}

export type RemoveItemFromCartAction = {
  type: 'REMOVE_ITEM_FROM_CART',
  id: number
}

export type UpdateSearchInputAction = {
  type: 'UPDATE_SEARCH_INPUT',
  word: string
}

export type FormActions = AddItemToCartAction | RemoveItemFromCartAction | UpdateSearchInputAction

export type SearchItemsByWord = {
  type: 'SEARCH_ITEM_BY_WORD',
  word: string
}

export type ItemsActions = SearchItemsByWord
