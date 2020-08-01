class ClosedInterval {
  constructor(lowerBound, upperBound) {
    if (arguments.length !== 2) {
      throw new MissingArgumentsError()
    }
    if (upperBound < lowerBound) {
      throw new UpperBoundLessThanLowerBoundError()
    }
    this.upperBound = upperBound;
    this.lowerBound = lowerBound;
  }

  toString() {
    return `[${this.lowerBound},${this.upperBound}]`
  }
}

class MissingArgumentsError extends Error {}
class UpperBoundLessThanLowerBoundError extends Error {}

module.exports = { ClosedInterval, MissingArgumentsError, UpperBoundLessThanLowerBoundError };
