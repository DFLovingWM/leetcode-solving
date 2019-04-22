const assert = require('assert')
const solve = require('./brute-force')

describe('测试', () => {
  describe('功能测试', () => {
    it('例子1，能匹配', () => {
      let text = "abcd"
      let pattern = "cdabcdab"
      assert.equal(solve(text, pattern), 3)
    })

    it('例子2，匹配不上', () => {
      let text = "abcde"
      let pattern = "cdabcdab"
      assert.equal(solve(text, pattern), -1)
    })
  })

  describe('边界测试', () => {
    it('1. text本身大于pattern', () => {
      let text = "aa"
      let pattern = "a"
      assert.equal(solve(text, pattern), 1)
    })

    it('2. text本身大于pattern', () => {
      let text = "aa"
      let pattern = "b"
      assert.equal(solve(text, pattern), -1)
    })

    it('3. text本身大于pattern', () => {
      let text = "aaaaaaaaaaaaaaaaaaaaaab"
      let pattern = "ba"
      assert.equal(solve(text, pattern), 2)
    })
  })
})