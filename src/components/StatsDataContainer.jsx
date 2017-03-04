'use strict';

import React from 'react'
import StatsPresentationContainer from './StatsPresentationContainer.jsx'
import fetch from 'node-fetch'

export default class StatsDataContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerSummary: {}
    };
  }

  componentDidMount() {
    fetch(`${window.location.origin}/steam/player`)
      .then(res => {
        return res.json() })
          .then(json => {
            this.setState({ playerSummary: json })
          });
  }

  render() {
    return (
      <StatsPresentationContainer playerSummary={this.state.playerSummary}/>
    );
  }
}
