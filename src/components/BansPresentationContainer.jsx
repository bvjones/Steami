'use strict';

import React from 'react'

export default class BansPresentationContainer extends React.Component {

  getDaysSinceLastBanElement() {
    if (this.props.bans.players[0].NumberOfVACBans === 0) {
      return ""
    } else {
      return (
        <span className="mx-3">{this.props.bans.players[0].DaysSinceLastBan} DAYS SINCE LAST BAN</span>
      )
    }
  }

  loadBans() {
    if ( Object.keys(this.props.bans).length === 0) {
      return (
        <div className="d-flex justify-content-center">
          <img src="/img/loading_icon.svg" className="loading-icon align-self-center" />
        </div>
      )
    } else {
      let daysSinceLastBan = this.getDaysSinceLastBanElement();
      return (
        <div className="d-flex justify-content-center my-3 flex-wrap">
          <span className="mx-3">{this.props.bans.players[0].NumberOfVACBans} BANS</span>
          { daysSinceLastBan }
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
