'use strict';

import React from 'react'

export default class StatContainer extends React.Component {
  render() {
    return (
      <div className="StatContainer">
        <h1 className="Stats">Stats</h1>
        <p className="AccountStatBox">Game Stats...</p>
        <div className="AccountAchievementProgress"></div>
      </div>
    );
  }
}
