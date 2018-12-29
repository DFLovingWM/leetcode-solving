const assert = require('assert')
const { solve2, solve1 } = require('./zero-one')

describe(`背包问题`, () => {
  it(`01背包：二维`, (done) => {
    let data = [
      [71, 100],
      [69, 1],
      [1, 2]
    ]
    assert.equal( solve2(data, 70), 3 )
    done()
  })

  it(`01背包：一维`, (done) => {
    let data = [
      [71, 100],
      [69, 1],
      [1, 2]
    ]
    assert.equal( solve1(data, 70), 3 )
    done()
  })
})