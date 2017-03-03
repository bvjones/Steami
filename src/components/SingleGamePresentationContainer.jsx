'use strict';

import React from 'react'

export default class SingleGamePresentationContainer extends React.Component {

  loadGame() {
    if ( Object.keys(this.props.gameData).length === 0) {
      return "Loading..."
    } else {
      return (
        <div>
          <div className='d-flex align-items-center pl-2 mt-2'>
            <img className="single-game-image" src={`http://media.steampowered.com/steamcommunity/public/images/apps/${this.props.gameData.appid}/${this.props.gameData.img_logo_url}.jpg`}/>
            <h1 className="single-game-title pl-2">{this.props.gameData.name}</h1>
          </div>
          <div className='d-flex justify-content-center my-2'>
            <span className="single-game-time-played">Played {(this.props.gameData.playtime_forever) / 60} hours</span>
          </div>
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
