'use strict';

import React from 'react'

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <img className="SteamAvatar"/>
        <h1 className="SteamId">SteamId Label</h1>
      </div>
    );
  }
}
