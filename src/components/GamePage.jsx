'use strict';

import React from 'react'
import SingleGameDataContainer from './SingleGameDataContainer.jsx'
import AchievementsDataContainer from './AchievementsDataContainer.jsx'



export default class GamePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameId: this.props.params.id
    };
  }

  render() {
    return (
      <div className="game-view pt-2 pb-5">
        {<SingleGameDataContainer gameId={this.state.gameId} />}
        {<AchievementsDataContainer gameId={this.state.gameId} />}
      </div>
    );
  }
}
