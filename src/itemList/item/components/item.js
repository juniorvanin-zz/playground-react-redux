// @flow

import React from 'react'
import AddToShoppingCartButton from './../addToShoppingCartButton/containers/addToShoppingCartButton'
import RemoveFromShoppingCartButton from './../removeFromShoppingCartButton/containers/removeFromShoppingCartButton'
import type { Item as ItemType } from './../../../types/domain'

import Image from '../../../resources/shopping-cart.svg'


const Item = ({ item, itemsAddedToCart }: Props) => (
  <li className="col-3">
    <div className="item">
      <p className="price">${ item.price }</p>
      <span>{ item.title }</span>
      <Image width="140px" height="140px"/>
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
