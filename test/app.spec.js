var chai = require('chai');
var expect = chai.expect;

var bowling = require('../app.js');

describe('Bowling Throw Simulator', () => {

  it('should be a function', () => {
    expect(bowling).to.be.a('function');
  });

  it('should return a valid score for a game containing no strikes/spares', () => {
    expect(bowling( [{throw1: 3, throw2: 4}, {throw1: 4, throw2: 5},
                    {throw1: 2, throw2: 1}, {throw1: 1, throw2: 0},
                    {throw1: 2, throw2: 3}, {throw1: 2, throw2: 3},
                    {throw1: 2, throw2: 3}, {throw1: 2, throw2: 3},
                    {throw1: 2, throw2: 3}, {throw1: 2, throw2: 3}] ))
                    .to.be.equal(50);
  });

});