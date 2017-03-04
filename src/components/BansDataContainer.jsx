'use strict';

import React from 'react'
import BansPresentationContainer from './BansPresentationContainer.jsx'
import fetch from 'node-fetch'

export default class BansDataContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bans: {}
    };
  }

  componentDidMount() {
    fetch(`${window.location.origin}/steam/player/bans`)
      .then(res => {
        return res.json() })
          .then(json => {
            this.setState({ bans: json })
          });
  }

  render() {
    return (
      <BansPresentationContainer bans={this.state.bans}/>
    );
  }
}
