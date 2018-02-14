import React from 'react'
import AddToShoppingCartButton from './../addToShoppingCartButton/containers/addToShoppingCartButton'
import RemoveFromShoppingCartButton from './../removeFromShoppingCartButton/containers/removeFromShoppingCartButton'

const Item = ({ item, itemsAddedToCart }) => {
  return (
    <li>
      <p className="price">${ item.price }</p>
      <span>{ item.title }</span>
      <img src="./shopping-cart.png" alt="ilustrative item" />
      <p> { item.description }</p>
      { isProductAddedToShoppingCart(itemsAddedToCart, item.id) ? <RemoveFromShoppingCartButton item={item}/> : <AddToShoppingCartButton item={item}/> }
    </li>
  )
}

const isProductAddedToShoppingCart = (itemsAddedToCart, id) => itemsAddedToCart.find(item => item === id)

export default Item
