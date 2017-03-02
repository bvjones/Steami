import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import PlayerIdentity from '../src/components/PlayerIdentity.jsx';


describe("<PlayerIdentity />", function() {

  xit("SteamId text is equal to the user's persona name", function() {
    expect(shallow(<PlayerIdentity />).text()).to.equal('chinito!');
  });

});
