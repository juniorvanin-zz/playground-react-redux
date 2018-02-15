// @flow

import type { Item } from './../types/domain'

export type Cart = {
  itemsAdded: Array<string>
}

export type FormState = {
  searchedItem: string,
  cart: Cart
}

export type ItemsState = {
  searchedItems: Array<Item>,
  availables: Array<Item>,
  searchResultMessage: string
}

export type State = {
  form: FormState,
  items: ItemsState
}
