import React from 'react'
import Header from './../header/components/header'
import ShoppingCartDetails from './../shoppingCartDetails/components/shoppingCartDetails'

import './../layout.css'

const hideShoppingCart = ({ displayShoppingCart, toggleShoppingCart }) => () => {
  if (displayShoppingCart) toggleShoppingCart()
}

const Layout = props => (
  <React.Fragment>
    <section className="mainContent" onClick={hideShoppingCart(props)} onKeyDown={hideShoppingCart(props)} role="button" tabIndex="0">
      <Header />
      { props.children }
    </section>
    <ShoppingCartDetails items={props.items} displayShoppingCart={props.displayShoppingCart} />
  </React.Fragment>
)

export default Layout
