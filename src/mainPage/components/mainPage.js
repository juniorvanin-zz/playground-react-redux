import React from 'react'
import ItemList from './../../itemList/components/itemList'

import './../mainPage.css'

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <React.Fragment>
        { this.props.loading ? <div className="loading" /> : null }
        <ItemList items={this.props.items} />
      </React.Fragment>
    )
  }
}
export default MainPage
