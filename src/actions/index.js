// @flow

import type {
  SearchItemsByWord,
  UpdateSearchInputAction,
  AddItemToCartAction,
  RemoveItemFromCartAction } from './../types/actions'

export const searchItemsByWord = (word: string): SearchItemsByWord => ({
  type: 'SEARCH_ITEM_BY_WORD',
  word,
})

export const updateSearchInput = (word: string): UpdateSearchInputAction => ({
  type: 'UPDATE_SEARCH_INPUT',
  word,
})

export const addToCart = (id: number): AddItemToCartAction => ({
  type: 'ADD_ITEM_TO_CART',
  id,
})

export const removeFromCart = (id: number): RemoveItemFromCartAction => ({
  type: 'REMOVE_ITEM_FROM_CART',
  id,
})
