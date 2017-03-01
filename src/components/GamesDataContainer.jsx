'use strict';

import React from 'react'
import GamesPresentationContainer from './GamesPresentationContainer.jsx'

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
        console.log("Got response:");
        console.log(res);
        return res.json() })
          .then(json => {
            console.log("Made JSON:");
            console.log(json);
            this.setState({ games: json })
          });
  }


  render() {
    return (
      <GamesPresentationContainer/>
    );
  }
}
