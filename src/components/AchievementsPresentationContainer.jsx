'use strict';

import React from 'react'
import fetch from 'node-fetch'
import Achievement from './Achievement.jsx'

export default class AchievementsPresentationContainer extends React.Component {

  loadAchievements() {
    if (this.props.playerCompletedAchievements.length === 0 && this.props.playerOutstandingAchievements.length === 0) {
      if (this.props.gameHasAchievements) {
        return <img src="/img/loading_icon.svg" className="loading-icon align-self-center" />
      } else {
        return "No achievements listed for this game"
      }
    } else {
      let completed = this.renderAchievementComponents(this.props.playerCompletedAchievements);
      let outstanding = this.renderAchievementComponents(this.props.playerOutstandingAchievements);
      return (
      <div>
        <h2>Completed <span className="ach-count">({ this.props.playerCompletedAchievements.length })</span></h2>
        <div className="d-flex flex-wrap justify-content-center mt-3 px-5">
            { completed }
        </div>
        <h2>Outstanding <span className="ach-count">({ this.props.playerOutstandingAchievements.length })</span></h2>
        <div className="d-flex flex-wrap justify-content-center mt-3 px-5">
            { outstanding }
        </div>
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
