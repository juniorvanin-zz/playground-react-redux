// @flow

import type { Item } from './../types/domain'

export type ShoppingCartState = {
  searchedItem: string,
  itemsAdded: Array<number>
}

export type ItemsState = {
  searchedItems: Array<Item>,
  availables: Array<Item>,
  searchResultMessage: string
}

export type State = {
  shoppingCart: ShoppingCartState,
  items: ItemsState
}
