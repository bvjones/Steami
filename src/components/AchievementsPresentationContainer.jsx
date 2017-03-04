'use strict';

import React from 'react'
import fetch from 'node-fetch'
import Achievement from './Achievement.jsx'

export default class AchievementsPresentationContainer extends React.Component {

  loadAchievements() {
    if (this.props.playerCompletedAchievements.length === 0 && this.props.playerOutstandingAchievements.length === 0) {
      if (this.props.gameHasAchievements) {
        return (
          <div className="d-flex justify-content-center">
            <img src="/img/loading_icon.svg" className="loading-icon align-self-center" />
          </div>
        )
      } else {
        return (
          <h4 className="text-center mt-5">NO ACHIEVEMENTS LISTED FOR THIS GAME</h4>
        )
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
