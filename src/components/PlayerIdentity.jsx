'use strict';

import React from 'react'

export default class PlayerIdentity extends React.Component {

  loadPlayerIdentity() {
    if ( Object.keys(this.props.playerSummary).length === 0) {
      return "Loading..."
    } else {
      return (
        <div className="d-flex align-items-center pl-2">
          <img className="steam-avatar" src={this.props.playerSummary.response.players[0].avatarmedium}/>
          <h1 className="steam-id">{this.props.playerSummary.response.players[0].personaname}</h1>
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
