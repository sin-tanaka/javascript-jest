class ClosedInterval {
  constructor(lowerBound, upperBound) {
    if (arguments.length !== 2) {
      throw new MissingArgumentsError()
    }
    if (!Number.isInteger(lowerBound) || !Number.isInteger(upperBound)) {
      throw new NotIntegerError()
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

  contains(val) {
    return val <= this.upperBound && val >= this.lowerBound
  }
}

class NotIntegerError extends Error {}
class MissingArgumentsError extends Error {}
class UpperBoundLessThanLowerBoundError extends Error {}

module.exports = { ClosedInterval, MissingArgumentsError, UpperBoundLessThanLowerBoundError, NotIntegerError };
