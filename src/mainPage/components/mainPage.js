import React from 'react'
import ItemList from './../../itemList/components/itemList'

import './../../App.css'

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>
      { this.props.loading ? <div className="loading" /> : null }
      <ItemList items={this.props.items} />
      </div>
    )
  }
}
export default MainPage
