import React from 'react'
import GameList from './../../gameList/components/gameList'

import './../mainPage.css'

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.fetchLatestGames()
  }

  render() {
    return (
      <React.Fragment>
        { this.props.loading ? <div className="loading" /> : null }
        <GameList items={this.props.items} />
      </React.Fragment>
    )
  }
}
export default MainPage
