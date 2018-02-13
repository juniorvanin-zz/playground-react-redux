import React from 'react'

const ItemList = (state) => {
  const items = state.items.searchedItems.length !== 0 ? state.items.searchedItems : state.items.availables

  return (
    <form>
      <ul className="shopping-card">
      {
        items.map(item =>
          (
            <li key={ item.id }>
              <span>{ item.title }</span>
              <img src="./shopping-cart.png" alt="ilustrative item" />
              <p> { item.description }</p>
              <p className="price">${ item.price }</p>
            </li>
          )
        )
      }
      </ul>
    </form>
  )
}

export default ItemList
