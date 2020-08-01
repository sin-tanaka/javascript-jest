class ClosedInterval {
  constructor(lowerBound, upperBound) {
    this.upperBound = upperBound;
    this.lowerBound = lowerBound;
  }

  toString() {
    return `[${this.lowerBound},${this.upperBound}]`
  }
}

module.exports.ClosedInterval = ClosedInterval;
