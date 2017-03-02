import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import BansPresentationContainer from '../src/components/BansPresentationContainer.jsx';

var api_response = {
    "players": [
        {
            "SteamId": "76561197980367679",
            "CommunityBanned": false,
            "VACBanned": true,
            "NumberOfVACBans": 1,
            "DaysSinceLastBan": 3543,
            "NumberOfGameBans": 0,
            "EconomyBan": "none"
        }
    ]

}

describe("<BansPresentationContainer />", function() {

  const props = {
    bans: api_response
  }

  it("Shows number of bans", function() {
    expect(render(<BansPresentationContainer {...props} />).text()).to.include('1');
  });

	it("Shows number of days since last ban", function() {
    expect(render(<BansPresentationContainer {...props} />).text()).to.include('3543');
  });

});
