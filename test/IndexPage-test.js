import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import IndexPage from '../src/components/IndexPage.jsx';
import PlayerIdentity from '../src/components/PlayerIdentity.jsx';


describe("<Index Page />", function() {
  const wrapper = shallow(<IndexPage />);

  it("contains a class called home", function() {
    expect(shallow(<IndexPage />).hasClass('home')).to.equal(true);
  });

  it("contains components StatDataContainer and GamesDataContainer", function() {
    expect(wrapper.text()).to.equal('<StatsDataContainer /><GamesDataContainer />');
  });

});
