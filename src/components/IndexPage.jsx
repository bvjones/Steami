'use strict';

import React from 'react'
import StatsDataContainer from './StatsDataContainer.jsx'
import GamesDataContainer from './GamesDataContainer.jsx'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home pt-2 pb-5">
        {<StatsDataContainer/>}
        {<GamesDataContainer/>}
      </div>
    );
  }
}
