'use strict';

import React from 'react';
import ReactTooltip from 'react-tooltip'

export default class Achievement extends React.Component {
  render() {
    return (
      <div>
        <div className="achievement-item mx-1 my-2 hover-box-shadow" data-tip data-for={`ach_${this.props.name}`}>
          <img className="achievment-image" src={`${this.props.achieved === 0 ? this.props.icongray : this.props.icon}`}></img>
        </div>
        <ReactTooltip id={`ach_${this.props.name}`}>
          <h4>{this.props.displayName}</h4>
          <p>{this.props.description}</p>
        </ReactTooltip>
      </div>
    )
  }
}
