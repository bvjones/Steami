'use strict';

import React from 'react'
import AchievementsPresentationContainer from './AchievementsPresentationContainer.jsx'
import fetch from 'node-fetch'

export default class AchievementsDataContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameAchievements: {},
      playerAchievements: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/steam/games/${this.props.gameId}/schema`)
      .then(res => {
        return res.json() })
          .then(json => {
            let achObj = json.game.availableGameStats.achievements
            this.setState({ gameAchievements: achObj })
          });
    fetch(`http://localhost:3000/steam/player/achievements/${this.props.gameId}`)
      .then(res => {
        return res.json() })
          .then(json => {
            let achObj = json.playerstats.achievements
            this.setState({ playerAchievements: achObj })
          });
  }

  render() {
    console.log(this.state.gameAchievements);
    console.log(this.state.playerAchievements);
    return (
      <AchievementsPresentationContainer gameAchievements={this.state.gameAchievements} playerAchievements={this.state.playerAchievements} />
    );
  }
}
