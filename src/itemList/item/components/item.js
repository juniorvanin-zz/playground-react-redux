// @flow

import React from 'react'
import AddToShoppingCartButton from './../addToShoppingCartButton/containers/addToShoppingCartButton'
import RemoveFromShoppingCartButton from './../removeFromShoppingCartButton/containers/removeFromShoppingCartButton'

import type { Item as ItemType } from './../../../types/domain'

import './../item.css'

const Item = ({ item, itemsAddedToCart }: Props) => (
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

const isProductAddedToShoppingCart = (itemsAddedToCart: Array<number>, id: number): boolean => (
  itemsAddedToCart.includes(id)
)

type Props = {
  item: ItemType,
  itemsAddedToCart: Array<number>
}

export default Item
