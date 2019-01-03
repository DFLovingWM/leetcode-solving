const generateParenthesis = require('./iterative')
const assert = require('assert')

describe(`22`, () => {
  it(`1`, () => {
    let result = generateParenthesis(3)
    assert.deepEqual(result, [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ])
  })
})
