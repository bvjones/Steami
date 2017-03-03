'use strict';

import React from 'react'
import Game from './Game.jsx'

export default class GamesPresentationContainer extends React.Component {

  loadGames() {
    if ( Object.keys(this.props.games).length === 0) {
      return <img src="/img/loading_icon.svg" className="loading-icon align-self-center" />
    } else {
      return this.renderGamesComponents();
    }
  }

  renderGamesComponents() {
    return this.props.games.response.games.map(
      (game, i) => <Game key={i} {...game}/>
    );
  }

  getGamesCount(){
    if ( Object.keys(this.props.games).length === 0) {
      return 0
    } else {
      return this.props.games.response.games.length;
    }
  }

  render() {
    let content = this.loadGames();
    let gameCount = this.getGamesCount();
    return (
      <div className="games-presentation-container">
        <h2 className="Games">Games <span className="ach-count">({ gameCount })</span></h2>
          <div className="games-list d-flex flex-wrap justify-content-center mt-3 px-5">
              { content }
          </div>
      </div>
    );
  }
}
