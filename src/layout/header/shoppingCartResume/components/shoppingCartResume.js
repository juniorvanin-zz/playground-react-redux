import React from 'react'

import ShoppingCartEmpty from '../../../../resources/shopping-cart-empty.svg'
import ShoppingCartFull from '../../../../resources/shopping-cart-full.svg'

const ShoppingCartResume = ({ items, toggleShoppingCart }) => (
  <div className="shopping-cart-resume">
    <button className="shopping-cart-resume-icon" type="submit" onClick={() => toggleShoppingCart()}>
      {
        items.length === 0
        ? <ShoppingCartEmpty width={50} height={50} />
        : <ShoppingCartFull width={50} height={50} />
      }
    </button>
    <p className="shopping-cart-resume-quantity">{ items.length }</p>
  </div>
)

export default ShoppingCartResume
