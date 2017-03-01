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

  componentWillMount() {
    fetch("http://localhost:3000/steam/player/76561197980367679/games")
      .then(res => {
        console.log("Got response:");
        console.log(res);
        return res.json() })
          .then(json => {
            console.log("Made JSON:");
            console.log(json);
            this.setState({ games: json })
            console.log("1");
          });
  }


  render() {
    console.log("2");
    return (
      <GamesPresentationContainer games={this.state.games}/>
    );
  }
}
