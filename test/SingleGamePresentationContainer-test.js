import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import SingleGamePresentationContainer from '../src/components/SingleGamePresentationContainer.jsx';

var api_response = {

	"appid": 730,
	"name": "Counter-Strike: Global Offensive",
	"playtime_forever": 78673,
	"img_icon_url": "69f7ebe2735c366c65c0b33dae00e12dc40edbe4",
	"img_logo_url": "d0595ff02f5c79fd19b06f4d6165c3fda2372820",
	"has_community_visible_stats": true

}


describe("<SingleGamePresentationContainer />", function() {

  const props = {
    gameData: api_response
  }

	it("Renders the game's title", () => {
		expect(render(<SingleGamePresentationContainer {...props} />).text()).to.include('Counter-Strike: Global Offensive');
  });

	it("Renders the hours played", () => {
		expect(render(<SingleGamePresentationContainer {...props} />).text()).to.include('1311.2166666666667');
  });

  it("Renders the game's logo", () => {
    const wrapper = shallow(<SingleGamePresentationContainer {...props} />);
    const image = wrapper.find({src: 'http://media.steampowered.com/steamcommunity/public/images/apps/730/d0595ff02f5c79fd19b06f4d6165c3fda2372820.jpg'});
    expect(image).to.have.length(1);
  });

});
