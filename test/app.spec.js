var chai = require('chai');
var expect = chai.expect;

var bowling = require('../app.js');

describe('Bowling Throw Simulator', () => {

  it('should be a function', () => {
    expect(bowling).to.be.a('function');
  });

});