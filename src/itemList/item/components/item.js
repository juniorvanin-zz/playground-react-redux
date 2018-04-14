import React from 'react'
import AddToShoppingCartButton from './../addToShoppingCartButton/containers/addToShoppingCartButton'
import RemoveFromShoppingCartButton from './../removeFromShoppingCartButton/containers/removeFromShoppingCartButton'

import './../item.css'

const Item = ({ item, itemsAddedToCart }) => (
  <li className="col-3">
    <section className="item">
      <img />
      <h2>{ item.title }</h2>
      <p> { item.description }</p>
      <span>$ { item.price }</span>
      {
        isProductAddedToShoppingCart(itemsAddedToCart, item.id)
        ? <RemoveFromShoppingCartButton item={item} />
        : <AddToShoppingCartButton item={item} />
      }
    </section>
  </li>
)

const isProductAddedToShoppingCart = (itemsAddedToCart, id) => (
  itemsAddedToCart.includes(id)
)

export default Item
