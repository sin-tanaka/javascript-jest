const { ClosedInterval } = require("./closedInterval");

test("閉区間のインスタンスを作れる", () => {
  const closedInterval = new ClosedInterval();
  expect(closedInterval).toBeInstanceOf(ClosedInterval);
});

describe("できたインスタンスは", () => {
  describe("下端点をもつ", () => {
    test("lowerBound:0を与えたとき、インスタンスのlowerBoundは0になる(upperBoundは任意)", () => {
      const anyUpperBound = 0;
      const lowerBound = 0;
      const closedInterval = new ClosedInterval(lowerBound, anyUpperBound);
      expect(closedInterval).toHaveProperty('lowerBound', lowerBound);
    });
  });

  describe("上端点をもつ", () => {
    test("upperBound:1を与えたとき、インスタンスのupperBoundは1になる(lowerBoundは任意)", () => {
      const anyLowerBound = 0;
      const upperBound = 1;
      const closedInterval = new ClosedInterval(anyLowerBound, upperBound);
      expect(closedInterval).toHaveProperty('upperBound', upperBound);
    });
  })
});

test("下端点と上端点の文字列表現を返せる", () => {
  const closedInterval = new ClosedInterval(3, 8)
  expect(closedInterval.toString()).toEqual("[3,8]")
})
