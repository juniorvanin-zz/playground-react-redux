import React from 'react'

const AddToShoppingCartButton = ({ item, addToCart }) => (
  <button id={item.id} onClick={ () => addToCart(item.id) } type="submit" className="add-to-cart">Add to cart</button>
)

export default AddToShoppingCartButton
