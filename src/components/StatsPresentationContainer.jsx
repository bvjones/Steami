'use strict';

import React from 'react'
import BansDataContainer from './BansDataContainer.jsx'
import PlayerIdentity from './PlayerIdentity.jsx'


export default class StatsPresentationContainer extends React.Component {
  render() {
    return (
      <div>
        <PlayerIdentity playerSummary={this.props.playerSummary}/>
        <BansDataContainer/>
      </div>
    );
  }
}
