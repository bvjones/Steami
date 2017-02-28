'use strict';

import React from 'react'
import player from '../data/GetPlayerSummaries.jsx';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <img className="SteamAvatar"/>
        <h1 className="SteamId">{player.personaname}</h1>
      </div>
    );
  }
}
