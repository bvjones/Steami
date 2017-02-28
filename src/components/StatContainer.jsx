'use strict';

import React from 'react'
import player from '../data/GetPlayerSummaries.jsx';
import bans from '../data/GetPlayerBans.jsx';
import games from '../data/GetOwnedGames.jsx';

export default class StatContainer extends React.Component {
  render() {
    return (
      <div className="StatContainer">
        <h1 className="Stats">Stats</h1>
        <p className="AccountStatBox">Game Stats...</p>
        <ul>
          <li>{bans.players[0].NumberOfVACBans} bans</li>
          <li>{bans.players[0].DaysSinceLastBan} days since last ban</li>
          <li>{games.response.game_count} games</li>
        </ul>
        <div className="AccountAchievementProgress"></div>
      </div>
    );
  }
}
