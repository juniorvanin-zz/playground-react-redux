import React from 'react'
import SearchBar from './../searchBar/containers/searchBar'
import ShoppingCartResume from './../shoppingCartResume/containers/shoppingCartResume'
import Logo from './../logo/components/logo'

import './../logo.css'

const Header = () => (
  <header>
    <Logo />
    <SearchBar />
    <ShoppingCartResume />
  </header>
)

export default Header
