const { ClosedInterval } = require("./closedInterval");

test("閉区間のインスタンスを作れる", () => {
  const closedInterval = new ClosedInterval();
  expect(closedInterval).toBeInstanceOf(ClosedInterval);
});

describe("できたインスタンスは", () => {
  describe("下端点をもつ", () => {
    test("なんらかの値がある", () => {
      const lowerBound = 0;
      const closedInterval = new ClosedInterval(lowerBound);
      expect(closedInterval).toHaveProperty('lowerBound', lowerBound);
    });
  });

  test("上端点をもつ", () => {
    const anyLowerBound = 0;
    const upperBound = 1;
    const closedInterval = new ClosedInterval(anyLowerBound, upperBound);
    expect(closedInterval).toHaveProperty('upperBound', upperBound);
  });
});
