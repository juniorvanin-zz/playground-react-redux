// @flow

import type {
  SearchItemsByWord,
  AddItemToCartAction,
  RemoveItemFromCartAction,
  ToggleShoppingCartAction
} from './../types/actions'

export const searchItemsByWord = (word: string): SearchItemsByWord => ({
  type: 'SEARCH_ITEM_BY_WORD',
  word
})

export const addToCart = (id: number): AddItemToCartAction => ({
  type: 'ADD_ITEM_TO_CART',
  id
})

export const toggleShoppingCart = (): ToggleShoppingCartAction => ({
  type: 'TOGGLE_SHOPPING_CART'
})

export const removeFromCart = (id: number): RemoveItemFromCartAction => ({
  type: 'REMOVE_ITEM_FROM_CART',
  id
})
