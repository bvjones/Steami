'use strict';

import React from 'react'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="Main">
        <div className="NavBar">
          <img className="SteamAvatar"/>
          <h1 className="SteamId">SteamId Label</h1>
        </div>

        <div className="StatContainer">
          <h1 className="Stats">Stats</h1>
          <p className="AccountStatBox">Game Stats...</p>
          <div className="AccountAchievementProgress"> PROGRESS
          </div>
        </div>

        <div className="GamesContainer">
          <h1 className="Games">Games</h1>
            <div className="GamesList">
              <img className="GameImageN"/>
              <h3 className="GameN">GameN</h3>
            </div>
        </div>
      </div>
    );
  }
}
