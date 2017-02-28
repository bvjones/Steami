'use strict';

import React from 'react'
import NavBar from './NavBar.jsx'
import StatContainer from './StatContainer.jsx'
import GamesContainer from './GamesContainer.jsx'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        {<NavBar/>}
        {<StatContainer/>}
        {<GamesContainer/>}
      </div>
    );
  }
}
