'use strict';

import React from 'react'
import AchievementsPresentationContainer from './AchievementsPresentationContainer.jsx'
import fetch from 'node-fetch'

export default class AchievementsDataContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameAchievements: {},
      playerAchievements: {},
      playerCompletedAchievements: [],
      playerOutstandingAchievements: []
    };
  }

  buildCompletedAchievements(gameAchArray, playerAchArray){
    let array = playerAchArray.filter(function(ach) {
      return ach.achieved == 1
    });
    array = array.map(
      function(playerAch, i) {
        let gameAch = gameAchArray[i]
        return Object.assign(gameAch, playerAch);
      }
    );
    console.log("ARRAY OF COMPLETED IS");
    console.log(array);
  }


  buildOustandingAchievements(gameAchArray, playerAchArray){
    let array = playerAchArray.filter(function(ach) {
      return ach.achieved == 0
    });

    array = array.map(
      function(playerAch, i) {
        let gameAch = gameAchArray[i]
        return Object.assign(gameAch, playerAch);
      }
    );
    console.log("ARRAY OF OUTSTANDING IS");
    console.log(array);
  }


  componentDidMount() {
    let gameAchArray = [];
    let playerAchArray = {};
    fetch(`http://localhost:3000/steam/games/${this.props.gameId}/schema`)
      .then(res => {
        return res.json() })
          .then(json => {
            gameAchArray = json.game.availableGameStats.achievements
            fetch(`http://localhost:3000/steam/player/achievements/${this.props.gameId}`)
              .then(res => {
                return res.json() })
                  .then(json => {
                    playerAchArray = json.playerstats.achievements
                    // this.setState({ playerAchievements: playerAchArray, gameAchievements: gameAchArray })
                    console.log('gameachievements populdated?');
                    console.log(gameAchArray.length != 0)
                    console.log('playerachsievements populdated?');
                    console.log(playerAchArray.length != 0)
                    if (gameAchArray.length != 0 && playerAchArray.length != 0) {
                      console.log('ABOUT TO RUN build of achievements arrays')
                      this.buildCompletedAchievements(gameAchArray, playerAchArray);
                      this.buildOustandingAchievements(gameAchArray, playerAchArray);
                    }
                  });
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
