const assert = require('assert')
// const letterCombinations = require('./recursive.js')
const letterCombinations = require('./iterative')

// describe(`测试递归`, () => {
//   it(`1`, () => {
//     const result = letterCombinations('12131')
//     assert.deepEqual(result, ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
//   })

//   it(`边界情况`, () => {
//     assert.deepEqual(letterCombinations(''), [])
//   })
// })

describe(`测试for循环`, () => {
  it(`1`, () => {
    const result = letterCombinations('12131')
    assert.deepEqual(result, ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
  })

  it(`边界情况`, () => {
    assert.deepEqual(letterCombinations(''), [])
  })
})