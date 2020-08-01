const { ClosedInterval } = require("./closedInterval");

test("閉区間のインスタンスを作れる", () => {
  const closedInterval = new ClosedInterval();
  expect(closedInterval).toBeInstanceOf(ClosedInterval);
});

test("できたインスタンスは下端点をもつ", () => {
  const closedInterval = new ClosedInterval();
  expect(closedInterval).toHaveProperty('lowerBound');
});
test("できたインスタンスは上端点をもつ", () => {
  const closedInterval = new ClosedInterval();
  expect(closedInterval).toHaveProperty('upperBound');
});
