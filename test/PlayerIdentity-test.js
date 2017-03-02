import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import PlayerIdentity from '../src/components/PlayerIdentity.jsx';

var api_response = {
	"response": {
		"players": [
			{
				"steamid": "76561197980367679",
				"communityvisibilitystate": 3,
				"profilestate": 1,
				"personaname": "chinito!",
				"lastlogoff": 1488462156,
				"commentpermission": 1,
				"profileurl": "http://steamcommunity.com/profiles/76561197980367679/",
				"avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/da/da06adbb6979416158d991f426d8327a425f502b.jpg",
				"avatarmedium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/da/da06adbb6979416158d991f426d8327a425f502b_medium.jpg",
				"avatarfull": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/da/da06adbb6979416158d991f426d8327a425f502b_full.jpg",
				"personastate": 0,
				"primaryclanid": "103582791429521408",
				"timecreated": 1137275826,
				"personastateflags": 0
			}
		]

	}
}

describe("<PlayerIdentity />", function() {

  const props = {
    playerSummary: api_response
  }

  it("SteamId text is equal to the user's persona name", function() {
    expect(render(<PlayerIdentity {...props} />).text()).to.include('chinito!');
  });

});
