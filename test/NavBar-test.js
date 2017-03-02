import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import NavBar from '../src/components/NavBar.jsx';


describe("<NavBar />", function() {

  it("SteamId text is equal to the user's persona name", function() {
    expect(shallow(<NavBar />).text()).to.equal('chinito!');
  });

});
