import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import GamesPresentationContainer from '../src/components/GamesPresentationContainer.jsx';


describe("<GamesPresentationContainer />", function() {

  it("List of games is loaded correctly", function() {
    const wrapper = shallow(<GamesPresentationContainer />);
    expect(GamesPresentationContainer.render().hasClass('games-presentation-container')).to.equal(true);
  });

});
