'use strict';

import React from 'react'
import GamesPresentationContainer from './GamesPresentationContainer.jsx'
import fetch from 'node-fetch'

export default class GamesDataContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/steam/player/76561197980367679/games")
      .then(res => {
        return res.json() })
          .then(json => {
            this.setState({ games: json })
          });
  }

  render() {
    return (
      <GamesPresentationContainer games={this.state.games}/>
    );
  }
}
