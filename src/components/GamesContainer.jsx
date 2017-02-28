'use strict';

import React from 'react'
import gameslist from '../data/GetOwnedGames.jsx';
import Game from './Game.jsx'

export default class GamesContainer extends React.Component {
  render() {
    return (
      <div className="GamesContainer">
        <h1 className="Games">Games</h1>
          <div className="GamesList">
            <ul>{
              gameslist.response.games.map((game, i) => <Game key={i}
              {...game}/>)
              }
            </ul>
            <img className="GameImageN"/>
            <h3 className="GameN">GameN</h3>
          </div>
      </div>
    );
  }
}
