'use strict';

import React from 'react'
import SingleGameDataContainer from './SingleGameDataContainer.jsx'
import { Link } from 'react-router'

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameId: this.props.params.id
    };
  }

  render() {
    return (
      <div className="game-view">
        <Link to="/profile">My Profile</Link>
        {<SingleGameDataContainer gameId={this.state.gameId} />}
      </div>
    );
  }
}
