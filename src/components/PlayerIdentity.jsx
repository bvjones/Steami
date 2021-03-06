'use strict';

import React from 'react'

export default class PlayerIdentity extends React.Component {

  loadPlayerIdentity() {
    if ( Object.keys(this.props.playerSummary).length === 0) {
      return (
        <div className="d-flex justify-content-center">
          <img src="/img/loading_icon.svg" className="loading-icon align-self-center" />
        </div>
      )
    } else {
      return (
        <div className="d-flex align-items-center pl-2 mt-2 flex-wrap">
          <img className="steam-avatar" src={this.props.playerSummary.response.players[0].avatarmedium}/>
          <h1 className="steam-id pl-2 my-1">{this.props.playerSummary.response.players[0].personaname}</h1>
        </div>
      );
    }
  }

  render() {
    let content = this.loadPlayerIdentity();
    return (
      <div className="player-identity">
        { content }
      </div>
    );
  }
}
