const { ClosedInterval, MissingArgumentsError, UpperBoundLessThanLowerBoundError, NotIntegerError } = require("./closedInterval")

describe("閉区間のインスタンスを作れる", () => {
  test("下端点6, 上端点6を与えたときに例外が起きないこと", () => {
    expect(() => new ClosedInterval(6, 6)).not.toThrow()
  })

  test("下端点、上端店のどちらかが小数のときに例外が起きること", () => {
    expect(() => new ClosedInterval(2.17, 3.14)).toThrow(NotIntegerError)
  })

  test("指定忘れは例外になって欲しい", () => {
    expect(() => new ClosedInterval()).toThrow(MissingArgumentsError)
  })
})

describe("できたインスタンスは", () => {
  describe("下端点をもつ", () => {
    test("lowerBound:0を与えたとき、インスタンスのlowerBoundは0になる(upperBoundは任意)", () => {
      const anyUpperBound = 0
      const lowerBound = 0
      const closedInterval = new ClosedInterval(lowerBound, anyUpperBound)
      expect(closedInterval).toHaveProperty('lowerBound', lowerBound)
    })
  })

  describe("上端点をもつ", () => {
    test("upperBound:1を与えたとき、インスタンスのupperBoundは1になる(lowerBoundは任意)", () => {
      const anyLowerBound = 0
      const upperBound = 1
      const closedInterval = new ClosedInterval(anyLowerBound, upperBound)
      expect(closedInterval).toHaveProperty('upperBound', upperBound)
    })
  })
})

describe("下端点と上端点の文字列表現を返せる", () => {
  test("下端点3、上端点8を与えたとき '[3,8]' が戻る", () => {
    const closedInterval = new ClosedInterval(3, 8)
    expect(closedInterval.toString()).toEqual("[3,8]")
  })
})

describe('上端点より下端点が大きい閉区間を作ることはできない', function () {
  test("下端点8, 上端点3を与えたときに例外が起きること", () => {
    expect(() => new ClosedInterval(8, 3)).toThrow(UpperBoundLessThanLowerBoundError)
  })
})

describe('整数の閉区間は指定した整数を含むかどうかを判定できる', function () {
  test("下端点3、上端点8の閉区間に5は含まれること", () => {
    const closedInterval = new ClosedInterval(3, 8)
    expect(closedInterval.contains(5)).toBe(true)
  })
  test("下端点3、上端点8の閉区間に3は含まれること", () => {
    const closedInterval = new ClosedInterval(3, 8)
    expect(closedInterval.contains(3)).toBe(true)
  })
  test("下端点3、上端点8の閉区間に8は含まれること", () => {
    const closedInterval = new ClosedInterval(3, 8)
    expect(closedInterval.contains(8)).toBe(true)
  })
})
