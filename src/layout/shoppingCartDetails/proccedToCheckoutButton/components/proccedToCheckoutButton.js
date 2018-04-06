import React from 'react'
import { withRouter } from 'react-router-dom'

import DeliveryTruck from './../../../../resources/delivery-truck.svg'

const ProccedToCheckoutButton = ({ history }) => (
  <button onClick={() => history.push('/checkout')} type="submit">
    <DeliveryTruck height="40px" width="40px" />
    <span> Procced to checkout </span>
  </button>
)

export default withRouter(ProccedToCheckoutButton)
