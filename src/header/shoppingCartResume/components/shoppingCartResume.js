import React from 'react'

const ShoppingCartResume = ({ itemsQuantity }) => (
  <div className="shopping-cart-resume">
    <div className="shopping-cart-resume-icon"/>
    <p className="shopping-cart-resume-quantity">{ itemsQuantity }</p>
  </div>
)

export default ShoppingCartResume
