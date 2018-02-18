// @flow

import React from 'react'
import Item from '../item/containers/item'
import type { Item as ItemType } from './../../types/domain'

const ItemList = ({ items }: Props) => (
  <ul className="shopping-card">
    { items.map(item => <Item key={item.id} item={item} />) }
  </ul>
)

type Props = {
  items: Array<ItemType>
}

export default ItemList
