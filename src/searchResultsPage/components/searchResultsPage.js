import React from 'react'
import ItemList from './../../itemList/components/itemList'

import './../../App.css'

const buildSearchMessage = (numberOfItems) => {
  if (numberOfItems === 1) {
    return 'Only one result was found.'
  } else if (numberOfItems > 1) {
    return `${numberOfItems} results were found.`
  }

  return 'No results found for the given search.'
}

const SearchResultsPage = ({ items }) => (
  <div className="item-list">
    <p className="search-result-message"> { buildSearchMessage(items.length) } </p>
    <ItemList items={items} />
  </div>
)

export default SearchResultsPage
