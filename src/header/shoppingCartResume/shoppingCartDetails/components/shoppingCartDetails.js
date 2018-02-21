import React from 'react'
import { formatMoney } from 'accounting'
import ProccedToCheckoutButton from './../../proccedToCheckoutButton/components/proccedToCheckoutButton'

const ShoppingCartDetails = ({ items }) => (
  <div id="shopping-cart-details" style={{ display: 'none' }}>
    {
      items.length === 0
      ? <p className="empty-shopping-cart">Your shopping cart is empty { ':(' } </p>
      : buildShoppingCartDetails(items)
    }
  </div>
)

const buildShoppingCartDetails = items => (
  <React.Fragment>
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
  </React.Fragment>
)


const getTotal = items => items.map(item => item.price).reduce((a, b) => a + b, 0)

export default ShoppingCartDetails
