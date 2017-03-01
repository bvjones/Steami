import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import GamesDataContainer from '../src/components/GamesDataContainer.jsx';

var jsdom = require('jsdom').jsdom;
global.document = jsdom('');
global.window = document.defaultView;


describe('<GamesDataContainer />', () => {

  it('calls componentDidMount', () => {
    sinon.spy(GamesDataContainer.prototype, 'componentDidMount');
    const wrapper = mount(<GamesDataContainer />);
    expect(GamesDataContainer.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
