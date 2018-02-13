import React from 'react'

const ItemList = ({ items }) => (
  <form>
    <ul className="shopping-card">
    {
      items.availables.map(item =>
        (
          <li key={ item.id }>
            <span>{ item.title }</span>
            <img src="./shopping-cart.png" />
            <p> { item.description }</p>
            <p className="price">${ item.price }</p>
          </li>
        )
      )
    }
    </ul>
  </form>
)

export default ItemList
