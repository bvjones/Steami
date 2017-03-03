'use strict';

import React from 'react';
import { Link } from 'react-router'
import ReactTooltip from 'react-tooltip'

export default class Game extends React.Component {
  render() {
    return (
      <div className="game-flex-item mx-1 my-2 hover-box-shadow">
        <Link to={`/games/${this.props.appid}`}  data-tip data-for={`game_${this.props.appid}`}>
          <img className="game-image" src={`http://media.steampowered.com/steamcommunity/public/images/apps/${this.props.appid}/${this.props.img_logo_url}.jpg`}></img>
          <p className="game-name px-1">{this.props.name}</p>
        </Link>
        <ReactTooltip id={`game_${this.props.appid}`}>
          <h4>{this.props.name}</h4>
        </ReactTooltip>
      </div>
    )
  }
}
