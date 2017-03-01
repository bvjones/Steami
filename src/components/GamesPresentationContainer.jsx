'use strict';

import React from 'react'
import Game from './Game.jsx'

export default class GamesPresentationContainer extends React.Component {

  loadGames() {
    if ( Object.keys(this.props.games).length === 0) {
      return "Loading..."
    } else {
      return this.renderGamesComponents();
    }
  }

  renderGamesComponents() {
    return this.props.games.response.games.map(
      (game, i) => <Game key={i} {...game}/>
    );
  }

  render() {
    let content = this.loadGames();
    return (
      <div className="games-presentation-container">
        <h1 className="Games">Games</h1>
          <div className="GamesList">
            <ul>
              { content }
            </ul>
            <img className="GameImageN"/>
            <h3 className="GameN">GameN</h3>
          </div>
      </div>
    );
  }
}
