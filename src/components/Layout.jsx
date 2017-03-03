'use strict';

import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="container">{this.props.children}</div>
    );
  }
}
