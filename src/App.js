import React from 'react';
import ItemList from './itemList/containers/itemList'
import SearchBar from './searchBar/containers/searchBar'

import './App.css';

const App = () => (
  <div className="container">
    <div className="item-list">
      <SearchBar />
      <ItemList />
    </div>
  </div>
)

export default App
