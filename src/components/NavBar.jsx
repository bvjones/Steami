'use strict';

import React from 'react'
import player from '../data/GetPlayerSummaries.jsx';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <img className="SteamAvatar" src={player.response.players[0].avatarmedium}/>
        <h1 className="SteamId">{player.response.players[0].personaname}</h1>
      </div>
    );
  }
}
