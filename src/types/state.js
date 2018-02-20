// @flow

import type { Item } from './../types/domain'

export type ShoppingCartState = {
  searchedItem: string,
  itemsAdded: Array<string>
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
