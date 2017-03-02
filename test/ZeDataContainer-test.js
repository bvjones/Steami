import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import GamesDataContainer from '../src/components/GamesDataContainer.jsx';
import AchievementsDataContainer from '../src/components/AchievementsDataContainer.jsx';
import StatsDataContainer from '../src/components/StatsDataContainer.jsx';
import BansDataContainer from '../src/components/BansDataContainer.jsx';
import SingleGameDataContainer from '../src/components/SingleGameDataContainer.jsx';


import {jsdom} from 'jsdom';
global.document = jsdom('');
global.window = document.defaultView;

describe('<GamesDataContainer />', () => {
  it('Calls componentDidMount', () => {
    sinon.spy(GamesDataContainer.prototype, 'componentDidMount');
    const wrapper = mount(<GamesDataContainer />);
    expect(GamesDataContainer.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

describe('<BansDataContainer />', () => {
  it('Calls componentDidMount', () => {
    sinon.spy(BansDataContainer.prototype, 'componentDidMount');
    const wrapper = mount(<BansDataContainer />);
    expect(BansDataContainer.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

describe('<AchievementsDataContainer />', () => {
  it('Calls componentDidMount', () => {
    sinon.spy(AchievementsDataContainer.prototype, 'componentDidMount');
    const wrapper = mount(<AchievementsDataContainer />);
    expect(AchievementsDataContainer.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

describe('<StatsDataContainer />', () => {
  it('Calls componentDidMount', () => {
    sinon.spy(StatsDataContainer.prototype, 'componentDidMount');
    const wrapper = mount(<StatsDataContainer />);
    expect(StatsDataContainer.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

describe('<SingleGameDataContainer />', () => {
  it('Calls componentDidMount', () => {
    sinon.spy(SingleGameDataContainer.prototype, 'componentDidMount');
    const wrapper = mount(<SingleGameDataContainer />);
    expect(SingleGameDataContainer.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
