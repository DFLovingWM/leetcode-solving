const assert = require('assert')
const solve = require('./recursive')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let input = [1,2,3,null,5]
    let root = constructBinaryTree(input)
    let result = solve(root)
    let expectedResult = ["1->2->5", "1->3"]
    assert.deepEqual(result, expectedResult)
  })
})

describe('测试边界', () => {
  it('空树', () => {
    let input = []
    let root = constructBinaryTree(input)
    let result = solve(root)
    let expectedResult = []
    assert.deepEqual(result, expectedResult)
  })
})