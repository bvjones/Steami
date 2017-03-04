'use strict';

import React from 'react'
import { Link } from 'react-router'

export default class SingleGamePresentationContainer extends React.Component {

  loadGame() {
    if ( Object.keys(this.props.gameData).length === 0) {
      return (
        <div className="d-flex justify-content-center">
          <img src="/img/loading_icon.svg" className="loading-icon align-self-center" />
        </div>
      )
    } else {
      return (
        <div>
          <div className='d-flex align-items-center justify-content-start pl-2 mt-2 flex-wrap'>
            <img className="single-game-image" src={`http://media.steampowered.com/steamcommunity/public/images/apps/${this.props.gameData.appid}/${this.props.gameData.img_logo_url}.jpg`}/>
            <h1 className="single-game-title no-bottom-margin pl-3 my-1">{this.props.gameData.name}</h1>
            <Link to="/profile" className="ml-auto navigation-link py-1 px-3 hover-box-shadow">Back to Profile</Link>
          </div>
          <div className='d-flex justify-content-center my-3'>
            <span className="single-game-time-played">PLAYED {parseInt((this.props.gameData.playtime_forever) / 60)} HOURS</span>
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
