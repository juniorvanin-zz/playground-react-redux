// @flow

import React from 'react'
import AddToShoppingCartButton from './../addToShoppingCartButton/containers/addToShoppingCartButton'
import RemoveFromShoppingCartButton from './../removeFromShoppingCartButton/containers/removeFromShoppingCartButton'
import type { Item as ItemType } from './../../../types/domain'

const Item = ({ item, itemsAddedToCart }: Props) => (
  <li className="col-3">
    <div className="item">
      <p className="price">${ item.price }</p>
      <span>{ item.title }</span>
      <img src={`../../../assets/products/${item.image}.svg`} alt="product thumbnail" />
      <p> { item.description }</p>
      {
        isProductAddedToShoppingCart(itemsAddedToCart, item.id)
        ? <RemoveFromShoppingCartButton item={item} />
        : <AddToShoppingCartButton item={item} />
      }
    </div>
  </li>
)

const isProductAddedToShoppingCart = (itemsAddedToCart: Array<ItemType>, id: number): boolean => (
  itemsAddedToCart.includes(id)
)

type Props = {
  item: ItemType,
  itemsAddedToCart: Array<ItemType>
}

export default Item
