'use strict';

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('keeps a record of the players score', function() {
    expect(bowling.score).toEqual(0);
  });

  it ("starts with 10 pins", function() {
    expect(bowling.pins).toEqual(10)
  });


});
