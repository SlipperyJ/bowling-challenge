'use strict';

function Scorecard() {
  this.scoreTotal = 0;
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.pinsNumber = 10;
}

Scorecard.prototype.getFrame = function () {
  return this.frameNumber;
};

Scorecard.prototype.getRoll = function () {
  return this.rollNumber;
};

Scorecard.prototype.getPins = function () {
  return this.pinsNumber
};

Scorecard.prototype.getScoreTotal = function () {
  return this.scoreTotal
};

Scorecard.prototype.rollScore = function (score) {
  this.scoreTotal += score
  this.rollNumber += 1
  this.pinsNumber -= score

  if (this.rollNumber === 2) {
    this.frameNumber += 1;
  };
};
