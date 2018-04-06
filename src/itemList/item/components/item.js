import React from 'react'
import AddToShoppingCartButton from './../addToShoppingCartButton/containers/addToShoppingCartButton'
import RemoveFromShoppingCartButton from './../removeFromShoppingCartButton/containers/removeFromShoppingCartButton'

import './../item.css'

const Item = ({ item, itemsAddedToCart }) => (
  <li className="col-3">
    <section className="item">
      <span>$ { item.price }</span>
      <h2>{ item.title }</h2>
      <img src={`../../../assets/products/${item.image}.svg`} alt="product thumbnail" />
      <p> { item.description }</p>
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
