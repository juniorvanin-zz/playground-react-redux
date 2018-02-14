import React from 'react'

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
  <ul>
    {
      items.map(item => (
        <li>
          <p className="title"> { item.title } </p>
          <p className="price"> { item.price } </p>
        </li>
      ))
    }
  </ul>
)


export default ShoppingCartResume
