'use strict';

import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="home">{this.props.children}</div>
    );
  }
}
