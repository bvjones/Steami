'use strict';

import React from 'react'
import fetch from 'node-fetch'

export default class AchievementsPresentationContainer extends React.Component {

  loadAchievements() {
    if ( Object.keys(this.props.gameAchievements).length === 0 || Object.keys(this.props.playerAchievements).length === 0) {
      return "Loading..."
    } else {
      return (
      <div>

      </div>
      )
    }
  }



  render() {
    let content = this.loadAchievements();
    return (
      <div>
        { content }
      </div>
    );
  }
}
