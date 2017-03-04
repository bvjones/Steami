'use strict';

import React from 'react'
import Game from './Game.jsx'

export default class GamesPresentationContainer extends React.Component {

  // loadGames() {
  //   if ( Object.keys(this.props.games).length === 0) {
  //     return <img src="/img/loading_icon.svg" className="loading-icon align-self-center" />
  //   } else {
  //     return this.renderGamesComponents();
  //   }
  // }

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

  getTotalTimePlayed() {
    if ( Object.keys(this.props.games).length === 0) {
      return 0
    } else {
      let totalTimePlayed = 0
      this.props.games.response.games.forEach(game => {
        totalTimePlayed += game.playtime_forever
      })
      return parseInt(totalTimePlayed/60)
    }
  }

  loadContent() {
    if ( Object.keys(this.props.games).length === 0) {
      return (
        <div className="d-flex justify-content-center">
          <img src="/img/loading_icon.svg" className="loading-icon align-self-center" />
        </div>
      )
    } else {
      let games = this.renderGamesComponents();
      let gameCount = this.getGamesCount();
      let totalTimePlayed = this.getTotalTimePlayed();
      return (
        <div className="games-presentation-container">
          <div className="d-flex justify-content-center mb-3 flex-wrap">
            <span className="mx-3">PLAYED {totalTimePlayed} HOURS TOTAL</span>
          </div>
          <h2 className="Games">Games <span className="ach-count">({ gameCount })</span></h2>
            <div className="games-list d-flex flex-wrap justify-content-center mt-3 px-5">
                { games }
            </div>
        </div>
      );
    }
  }

  render() {
    let content = this.loadContent();
    return (
      <div>
        { content }
      </div>
    );
  }
}
