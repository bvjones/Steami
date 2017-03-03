'use strict';

import React from 'react'

export default class BansPresentationContainer extends React.Component {

  loadBans() {
    if ( Object.keys(this.props.bans).length === 0) {
      return "Loading..."
    } else {
      return (
        <div className="d-flex justify-content-center my-2">
          <span className="mx-3">{this.props.bans.players[0].NumberOfVACBans} BANS</span>
          <span className="mx-3">{this.props.bans.players[0].DaysSinceLastBan} DAYS SINCE LAST BAN</span>
        </div>
      );
    }
  }

  render() {
    let content = this.loadBans();
    return (
      <div>
        { content }
      </div>
    );
  }
}
