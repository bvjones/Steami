'use strict';

import React from 'react'
import fetch from 'node-fetch'

export default class AchievementsPresentationContainer extends React.Component {

  loadAchievements() {
    if (this.props.playerCompletedAchievements.length === 0 || this.props.playerOutstandingAchievements.length === 0) {
      return "Loading..."
    } else {
      return (
      <div>

      </div>
      )
    }
  }

  renderAchievementComponents(achievements) {
    return achievements.map(
      (ach, i) => <Achievement key={i} {...ach}/>
    );
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
