import React from 'react'
import Item from '../item/containers/item'

const ItemList = (state) => {
  const items = state.items.searchedItems.length !== 0
    ? state.items.searchedItems
    : state.items.availables

  return (
    <div>
      <p className="search-result-message"> { state.items.searchResultMessage } </p>
      <ul className="shopping-card">
        { items.map(item => <Item key={item.id} item={item} />) }
      </ul>
    </div>
  )
}

export default ItemList
