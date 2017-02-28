'use strict';

import React from 'react'

export default class GamesContainer extends React.Component {
  render() {
    return (
      <div className="GamesContainer">
        <h1 className="Games">Games</h1>
          <div className="GamesList">
            <img className="GameImageN"/>
            <h3 className="GameN">GameN</h3>
          </div>
      </div>
    );
  }
}
