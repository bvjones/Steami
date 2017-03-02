'use strict';

import React from 'react'

export default class SingleGamePresentationContainer extends React.Component {

  loadGame() {
    if ( Object.keys(this.props.gameData).length === 0) {
      return "Loading..."
    } else {
      return (
        <div>
          <img className="single-game-image" src={`http://media.steampowered.com/steamcommunity/public/images/apps/${this.props.gameData.appid}/${this.props.gameData.img_logo_url}.jpg`}/>
          <h1 className="single-game-title">{this.props.gameData.name}</h1>
          <p className="single-game-time-played">Played {(this.props.gameData.playtime_forever) / 60} hours</p>
        </div>
      );
    }
  }

  render() {
    let content = this.loadGame();
    return (
      <div>
        { content }
      </div>
    );
  }
}
