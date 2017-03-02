'use strict';

import React from 'react'

export default class PlayerIdentity extends React.Component {

  loadPlayerIdentity() {
    console.log
    if ( Object.keys(this.props.playerSummary).length === 0) {
      return "Loading..."
    } else {
      return (
        <div>
          <img className="SteamAvatar" src={this.props.playerSummary.response.players[0].avatarmedium}/>
          <h1 className="SteamId">{this.props.playerSummary.response.players[0].personaname}</h1>
        </div>
      );
    }
  }

  render() {
    console.log('rendering PlayerIdentity');
    console.log(this.props.playerSummary);

    let content = this.loadPlayerIdentity();
    return (
      <div className="player-identity">
        { content }
      </div>
    );
  }
}
