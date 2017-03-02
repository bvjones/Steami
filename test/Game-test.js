import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Game from '../src/components/Game.jsx';

var api_response = {
	"response": {
		"game_count": 1,
		"games": [
			{
				"appid": 730,
				"name": "Counter-Strike: Global Offensive",
				"playtime_forever": 78673,
				"img_icon_url": "69f7ebe2735c366c65c0b33dae00e12dc40edbe4",
				"img_logo_url": "d0595ff02f5c79fd19b06f4d6165c3fda2372820",
				"has_community_visible_stats": true
			}
		]
	}
}


describe("<Game />", function() {

  const props = {
    games: api_response
  }

  it("Game's logo is rendered", () => {
    const wrapper = mount(<Game {...props} />);

    const image = wrapper.find({src: 'http://media.steampowered.com/steamcommunity/public/images/apps/undefined/undefined.jpg'});
    expect(image).to.have.length(1);
  });

});
