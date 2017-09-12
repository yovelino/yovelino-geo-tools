import * as chai from 'chai';
import index = require('../src/index');

const expect = chai.expect;

describe('index - GeoTools', () => {

  it('should provide GeoToole', () => {
    expect(index.GeoToools).to.not.be.undefined;
  });

});
