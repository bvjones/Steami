import { expect } from 'chai';
import steamApi from '../src/data/steamApi.js';

var inst = new steamApi();

describe('steamApi', () => {

  describe('GetPlayerSummaries', () => {

  it('should exist', () => {
    expect(inst.GetPlayerSummaries()).to.exist;
  });

 })
});

// 76561197980367679
