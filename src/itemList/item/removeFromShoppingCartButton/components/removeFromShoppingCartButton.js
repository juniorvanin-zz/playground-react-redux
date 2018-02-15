// @flow

import React from 'react'
import type { Item } from './../../../../types/domain'

const RemoveFromShoppingCartButton = ({ item, removeFromCart }: Props) => (
  <button id={item.id} onClick={() => removeFromCart(item.id)} type="submit" className="remove-from-cart">Remove from cart</button>
)

type Props = {
  item: Item,
  removeFromCart: Function
}

export default RemoveFromShoppingCartButton
