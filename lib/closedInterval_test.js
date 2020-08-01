const { ClosedInterval } = require("./closedInterval");

test("閉区間のインスタンスを作れる", () => {
  const closedInterval = new ClosedInterval();
  expect(closedInterval).toBeInstanceOf(ClosedInterval);
});

// test("できたインスタンスは下端点と上端点をもつ", () =>{
//
// });
