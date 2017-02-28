'use strict';

import React from 'react'
import NavBar from './NavBar.jsx'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="Main">
        {<NavBar/>}

        <div className="StatContainer">
          <h1 className="Stats">Stats</h1>
          <p className="AccountStatBox">Game Stats...</p>
          <div className="AccountAchievementProgress"></div>
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
