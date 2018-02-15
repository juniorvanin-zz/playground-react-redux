// @flow

import React from 'react'
import type { Item } from './../../../../types/domain'

const AddToShoppingCartButton = ({ item, addToCart }: Props) => (
  <button id={item.id} onClick={ () => addToCart(item.id) } type="submit" className="add-to-cart">Add to cart</button>
)

type Props = {
  item: Item,
  addToCart: Function
}

export default AddToShoppingCartButton
