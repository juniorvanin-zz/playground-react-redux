import React from 'react'

const RemoveFromShoppingCartButton = ({ item, removeFromCart }) => (
  <button id={item.id} onClick={() => removeFromCart(item.id)} type="submit" className="remove-from-cart">Remove from cart</button>
)

export default RemoveFromShoppingCartButton
