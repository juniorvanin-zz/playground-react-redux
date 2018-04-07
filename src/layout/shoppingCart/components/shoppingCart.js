import React from 'react'
import { formatMoney } from 'accounting'
import ProccedToCheckoutButton from './../proccedToCheckoutButton/components/proccedToCheckoutButton'
import CloseButton from './../closeButton/containers/closeButton'

import ShoppingCartIcon from './../../../resources/online-shopping.svg'

const ShoppingCart = ({ items, displayShoppingCart }) => (
  <div className={displayShoppingCart ? 'shopping-cart displayShoppingCart' : 'shopping-cart hideShoppingCart'}>
    <CloseButton />
    <ShoppingCartIcon className="shoppingCartIcon" width="70px" height="70px" />
    <h3> MY SHOPPING CART ({ items.length })</h3>
    {
      items.length === 0
      ? <p className="empty-shopping-cart">It is so lonely here { ':(' } </p>
      : buildShoppingCart(items)
    }
  </div>
)
const buildShoppingCart = items => (
  <React.Fragment>
    <ul>
      {
        items.map(item => (
          <li key={item.id}>
            <p className="title"> <span> { '1x' } </span> { item.title } </p>
            <p className="price"> { formatMoney(item.price) } </p>
          </li>
        ))
      }
    </ul>
    <hr />
    <span className="total">Total:  { formatMoney(getTotal(items)) } </span>
    <ProccedToCheckoutButton />
  </React.Fragment>
)

const getTotal = items => items.map(item => item.price).reduce((a, b) => a + b, 0)

export default ShoppingCart
