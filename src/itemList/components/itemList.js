// @flow

import React from 'react'
import Item from '../item/containers/item'
import type { Item as ItemType } from './../../types/domain'

const ItemList = ({ items, searchResultMessage }: Props) => (
  <div>
    <p className="search-result-message"> { searchResultMessage } </p>
    <ul className="shopping-card">
      { items.map(item => <Item key={item.id} item={item} />) }
    </ul>
  </div>
)

type Props = {
  items: Array<ItemType>,
  searchResultMessage: string
}

export default ItemList
