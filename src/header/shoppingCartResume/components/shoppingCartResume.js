// @flow

import React from 'react'
import type { Item } from './../../../types/domain'
import ShoppingCartDetails from './../shoppingCartDetails/components/shoppingCartDetails'

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
    <ShoppingCartDetails items={items} />
    <p className="shopping-cart-resume-quantity">{ items.length }</p>
  </div>
)

type Props = {
  items: Array<Item>
}

export default ShoppingCartResume
