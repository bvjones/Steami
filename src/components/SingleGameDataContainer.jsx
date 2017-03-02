'use strict';

import React from 'react'
import SingleGamePresentationContainer from './SingleGamePresentationContainer.jsx'
import fetch from 'node-fetch'

export default class SingleGameDataContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameData: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/steam/player/games")
      .then(res => {
        return res.json() })
          .then(json => {
            let gameObj = json.response.games.filter(function(obj){ return obj.appid == this.props.gameId }, this)[0]
            this.setState({ gameData: gameObj })
          });
  }

  render() {
    return (
      <SingleGamePresentationContainer gameData={this.state.gameData}/>
    );
  }
}
