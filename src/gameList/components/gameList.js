import React from 'react'
import Game from '../game/containers/game'

const GameList = ({ items }) => (
  <ul className="shopping-card">
    { items.map(item => <Game key={item.id} item={item} />) }
  </ul>
)

export default GameList
