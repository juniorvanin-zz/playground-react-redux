// @flow

export type AddItemToCartAction = {
  type: 'ADD_ITEM_TO_CART',
  id: number
}

export type RemoveItemFromCartAction = {
  type: 'REMOVE_ITEM_FROM_CART',
  id: number
}

export type FormActions = AddItemToCartAction | RemoveItemFromCartAction

export type SearchItemsByWord = {
  type: 'SEARCH_ITEM_BY_WORD',
  word: string
}

export type ItemsActions = SearchItemsByWord
