'use strict';

import React from 'react'

export default class BansPresentationContainer extends React.Component {

  loadBans() {
    if ( Object.keys(this.props.bans).length === 0) {
      return "Loading..."
    } else {
      return (
        <div>
          <li>{this.props.bans.players[0].NumberOfVACBans} bans</li>
          <li>{this.props.bans.players[0].DaysSinceLastBan} days since last ban</li>
        </div>
      );
    }
  }

  render() {
    let content = this.loadBans();
    return (
      <ul>
        { content }
      </ul>
    );
  }
}
