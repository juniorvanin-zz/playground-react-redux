import React from 'react'
import Item from '../item/containers/item'

const ItemList = ({ items }) => (
  <ul className="shopping-card">
    { items.map(item => <Item key={item.id} item={item} />) }
  </ul>
)

export default ItemList
