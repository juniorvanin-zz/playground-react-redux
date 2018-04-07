import React from 'react'

import './../closeButton.css'

import CloseIcon from './../../../../resources/cancel.svg'

const CloseButton = ({ toggleShoppingCart }) => (
  <button className="closeShoppingCart" onClick={() => toggleShoppingCart()} type="submit">
    <CloseIcon height="20px" width="20px" />
  </button>
)

export default CloseButton
