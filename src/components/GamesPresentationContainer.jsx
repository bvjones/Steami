'use strict';

import React from 'react'
import gameslist from '../data/GetOwnedGames.jsx';
import Game from './Game.jsx'

export default class GamesPresentationContainer extends React.Component {
  componentWillMount(){
    console.log("GamesPresentationContainer mounted");
  }
  render() {
    console.log("rendering props");
    console.log(this.props.games);
    console.log(this.props.games.response);
    console.log("2");


    return (
      <div className="games-presentation-container">
        <h1 className="Games">Games</h1>
          <div className="GamesList">
            <ul>{
              this.props.games.response.games.map((game, i) => <Game key={i}
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
