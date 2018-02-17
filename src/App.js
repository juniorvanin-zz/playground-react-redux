import React from 'react'
import ItemList from './itemList/containers/itemList'
import Header from './header/components/header'

import './App.css'

const App = () => (
  <div>
    <Header />
    <div className="item-list">
      <ItemList />
    </div>
  </div>
)

export default App
