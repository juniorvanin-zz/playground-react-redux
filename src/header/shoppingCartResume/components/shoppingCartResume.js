// @flow

import React from 'react'
import { formatMoney } from 'accounting'
import type { Item } from './../../../types/domain'
import ProccedToCheckoutButton from './../proccedToCheckoutButton/components/proccedToCheckoutButton'

import ShoppingCartEmpty from '../../../resources/shopping-cart-empty.svg'
import ShoppingCartFull from '../../../resources/shopping-cart-full.svg'

const handleOnClick = () => {
  const shoppingDetails = document.getElementById('shopping-cart-details')

  if (shoppingDetails) {
    if (shoppingDetails.style.display === 'none') {
      shoppingDetails.style.display = 'block'
    } else {
      shoppingDetails.style.display = 'none'
    }
  }
}

const ShoppingCartResume = ({ items }: Props) => (
  <div className="shopping-cart-resume">
    <button className="shopping-cart-resume-icon" type="submit" onClick={handleOnClick}>
      {
        items.length === 0
        ? <ShoppingCartEmpty width={50} height={50} />
        : <ShoppingCartFull width={50} height={50} />
      }
    </button>
    <div id="shopping-cart-details" style={{ display: 'none' }}>
      {
        items.length === 0
        ? <p className="empty-shopping-cart">Your shopping cart is empty { ':(' } </p>
        : buildShoppingCartDetails(items)
      }
    </div>
    <p className="shopping-cart-resume-quantity">{ items.length }</p>
  </div>
)

const buildShoppingCartDetails = (items: Array<Item>) => (
  <div>
    <ul>
      {
        items.map(item => (
          <li key={item.id}>
            <p className="title"> { item.title } </p>
            <p className="price"> { formatMoney(item.price) } </p>
          </li>
        ))
      }
    </ul>
    <hr />
    <p className="total">Total: { formatMoney(getTotal(items)) } </p>
    <ProccedToCheckoutButton />
  </div>
)



const getTotal = (items: Array<Item>): number =>
  items.map(item => item.price).reduce((a, b) => a + b, 0)

type Props = {
  items: Array<Item>
}

export default ShoppingCartResume
