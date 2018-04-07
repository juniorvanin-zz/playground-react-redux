import React from 'react'

import './../closeButton.css'

import CloseIcon from './../../../../resources/cancel.svg'

const CloseButton = ({ toggleShoppingCart }) => (
  <button className="closeShoppingCartButton" onClick={() => toggleShoppingCart()} type="submit">
    <CloseIcon className="closeIcon" height="20px" width="20px" />
  </button>
)

export default CloseButton
