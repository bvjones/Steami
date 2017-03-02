import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import AchievementsPresentationContainer from '../src/components/AchievementsPresentationContainer.jsx';

var api_response = {


}


describe("<AchievementsPresentationContainer />", function() {

  const props = {
    gameData: api_response
  }

	xit("Renders the game's completed achievements list", () => {
		expect(render(<AchievementsPresentationContainer {...props} />).text()).to.include('Counter-Strike: Global Offensive');
  });

	xit("Renders the game's outstanding achievements list", () => {
		expect(render(<AchievementsPresentationContainer {...props} />).text()).to.include('Counter-Strike: Global Offensive');
  });

  xit("Renders the game's completed achievements images", () => {
    const wrapper = shallow(<AchievementsPresentationContainer {...props} />);
    const image = wrapper.find({src: 'http://media.steampowered.com/steamcommunity/public/images/apps/730/d0595ff02f5c79fd19b06f4d6165c3fda2372820.jpg'});
    expect(image).to.have.length(1);
  });

	xit("Renders the game's outstanding achievements images", () => {
    const wrapper = shallow(<AchievementsPresentationContainer {...props} />);
    const image = wrapper.find({src: 'http://media.steampowered.com/steamcommunity/public/images/apps/730/d0595ff02f5c79fd19b06f4d6165c3fda2372820.jpg'});
    expect(image).to.have.length(1);
  });


});
