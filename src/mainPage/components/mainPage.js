// @flow

import React from 'react'
import ItemList from './../../itemList/components/itemList'
import Header from './../../header/components/header'
import type { Item } from './../../types/domain'

import './../../App.css'

const MainPage = ({ items }: Props) => (
  <div>
    <Header />
    <div className="item-list">
      <ItemList items={items} />
    </div>
  </div>
)

export type Props = {
  items: Array<Item>
}

export default MainPage
