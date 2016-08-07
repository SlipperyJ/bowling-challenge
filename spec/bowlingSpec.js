'use strict';

describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('starts with score at 0', function() {
    expect(scorecard.scoreTotal).toEqual(0);
  });

  it ("starts on frame one", function() {
    expect(scorecard.frameNumber).toEqual(1)
  });

  it ("starts on roll one", function() {
    expect(scorecard.rollNumber).toEqual(1)
  });

  it ("starts with 10 pins", function() {
    expect(scorecard.pinsNumber).toEqual(10)
  });

  it ("can receive a roll score", function() {
    scorecard.rollScore(8)
    expect(scorecard.scoreTotal).toEqual(8)
  });

  it ("moves to second roll after first roll", function() {
    scorecard.rollScore(5)
    expect(scorecard.rollNumber).toEqual(2)
  });

  it ("deducts pins after first roll", function() {
    scorecard.rollScore(7)
    expect(scorecard.pinsNumber).toEqual(3)
  });

  it ("moves to the next frame after 2 rolls", function(){
    scorecard.rollScore(7)
    scorecard.rollScore(2)
    expect(scorecard.frameNumber).toEqual(2)
  });
});
