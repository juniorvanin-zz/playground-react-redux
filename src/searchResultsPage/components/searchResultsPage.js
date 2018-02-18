// @flow

import React from 'react'
import ItemList from './../../itemList/components/itemList'
import Header from './../../header/components/header'
import type { Item } from './../../types/domain'

import './../../App.css'

const buildSearchMessage = (numberOfItems: number): string => {
  if (numberOfItems === 1) {
    return 'Only one result was found.'
  } else if (numberOfItems > 1) {
    return `${numberOfItems} results were found.`
  }

  return 'No results found for the given search.'
}

const SearchResultsPage = ({ items }: Props) => (
  <div>
    <Header />
    <div className="item-list">
      <p className="search-result-message"> { buildSearchMessage(items.length) } </p>
      <ItemList items={items} />
    </div>
  </div>
)

type Props = {
  items: Array<Item>
}

export default SearchResultsPage
