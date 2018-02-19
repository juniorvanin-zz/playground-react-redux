import React from 'react'
import { withRouter } from 'react-router-dom'

import ShoppingLogo from '../../../resources/gift.svg'

const Logo = ({ history }) => (
  <button onClick={() => history.push('/')} className="logo">
    <ShoppingLogo width="50px" height="50px" />
    <span>GIFT SHOP</span>
  </button>
)

export default withRouter(Logo)
