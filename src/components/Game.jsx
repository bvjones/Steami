'use strict';

import React from 'react';
import { Link } from 'react-router'

export default class Game extends React.Component {
  render() {
    return (
      <Link to={`/games/${this.props.appid}`} className="game-flex-item m-1">
        <img className="game-image" src={`http://media.steampowered.com/steamcommunity/public/images/apps/${this.props.appid}/${this.props.img_logo_url}.jpg`}></img>
        <p className="game-name">{this.props.name}</p>
      </Link>
    )
  }
}
