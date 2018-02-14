import React from 'react'
import { formatMoney } from 'accounting'

const handleOnClick = evt => {

  const shoppingDetails = document.getElementById("shopping-cart-details")

  if (shoppingDetails.style.display === "none") {
     shoppingDetails.style.display = "block";
  } else {
     shoppingDetails.style.display = "none";
  }
}

const ShoppingCartResume = ({ items }) => (
  <div className="shopping-cart-resume">
    <button className="shopping-cart-resume-icon" type="submit" onClick={handleOnClick}/>
    <div id="shopping-cart-details">
      {
        items.length === 0 ? <p className="empty-shopping-cart">Your shopping cart is empty :(</p> : buildShoppingCartDetails(items)
      }
    </div>
    <p className="shopping-cart-resume-quantity">{ items.length }</p>
  </div>
)

const buildShoppingCartDetails = items => (
  <div>
    <ul>
      {
        items.map(item => (
          <li key={ item.id }>
            <p className="title"> { item.title } </p>
            <p className="price"> { formatMoney(item.price) } </p>
          </li>
        ))
      }
    </ul>
    <hr/>
    <p className="total">Total: { formatMoney(getTotal(items)) } </p>
  </div>
)

const getTotal = items => items.map(item => item.price).reduce((a, b) => a + b, 0)

export default ShoppingCartResume
