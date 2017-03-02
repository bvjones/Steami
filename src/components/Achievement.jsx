'use strict';

import React from 'react';

export default class Achievement extends React.Component {
  render() {
    return (
      <li className="achievement">
        <span className="name">{this.props.displayName}</span>
        <img className="achievment-image" src={`${this.props.achieved === 0 ? this.props.icongray : this.props.icon}`}></img>
      </li>
    )
  }
}
