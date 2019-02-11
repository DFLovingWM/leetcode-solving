const assert = require('assert')
const solve = require('./index')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let arr = [3,9,20,null,null,15,7]
    let root = constructBinaryTree(arr)
    let result = solve(root)
    let expectedResult = 24
    assert.equal(result, expectedResult)
  })
})
