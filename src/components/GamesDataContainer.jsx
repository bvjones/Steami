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
    fetch(`${window.location.origin}/steam/player/games`)
      .then(res => {
        return res.json() })
          .then(json => {
            json.response.games = json.response.games.sort(this.compareGamesbyName);
            this.setState({ games: json })
          });
  }

  compareGamesbyName(a,b) {
    let field = 'name'
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  }

  render() {
    return (
      <GamesPresentationContainer games={this.state.games}/>
    );
  }
}
