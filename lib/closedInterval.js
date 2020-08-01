class ClosedInterval {
  constructor(lowerBound, upperBound) {
    if (upperBound < lowerBound) {
      throw Error()
    }
    this.upperBound = upperBound;
    this.lowerBound = lowerBound;
  }

  toString() {
    return `[${this.lowerBound},${this.upperBound}]`
  }
}

module.exports.ClosedInterval = ClosedInterval;
