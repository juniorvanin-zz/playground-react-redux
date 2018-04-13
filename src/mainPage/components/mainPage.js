import React from 'react'
import ItemList from './../../itemList/components/itemList'

import './../../App.css'

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <ItemList items={this.props.items} />
    )
  }
}
export default MainPage
