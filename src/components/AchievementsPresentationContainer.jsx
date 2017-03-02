'use strict';

import React from 'react'
import fetch from 'node-fetch'
import Achievement from './Achievement.jsx'

export default class AchievementsPresentationContainer extends React.Component {

  loadAchievements() {
    if (this.props.playerCompletedAchievements.length === 0 && this.props.playerOutstandingAchievements.length === 0) {
      if (this.props.gameHasAchievements) {
        return "Loading..."
      } else {
        return "No achievements listed for this game"
      }
    } else {
      let completed = this.renderAchievementComponents(this.props.playerCompletedAchievements);
      let outstanding = this.renderAchievementComponents(this.props.playerOutstandingAchievements);
      return (
      <div>
        <h2>Completed</h2>
        <ul>
          { completed }
        </ul>
        <h2>Outstanding</h2>
        <ul>
          { outstanding }
        </ul>
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
