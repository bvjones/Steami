import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import IndexPage from '../src/components/IndexPage.jsx';
import NavBar from '../src/components/NavBar.jsx';


describe("<Index Page />", function() {
  it("contains a class called home", function() {
    expect(shallow(<IndexPage />).hasClass('home')).to.equal(true);
  });
});

describe("<NavBar />", function() {
  const wrapper = shallow(<IndexPage />);
  it("contains a class called home", function() {
    expect(wrapper.find('.NavBar')).to.have.length(0);
    expect(wrapper.find(NavBar).render().find('.NavBar')).to.have.length(1);
  });
  it("contains components NavBar, StatContainer and GamesDataContainer", function() {
    expect(wrapper.text()).to.equal('<NavBar /><StatContainer /><GamesDataContainer />');
  });
});
