const assert = require('assert')
const solve = require('./dfs')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let input = [3,9,20,null,null,15,7]
    let root = constructBinaryTree(input)
    let result = solve(root)
    let expectedResult = [
      [3],
      [9,20],
      [15,7]
    ]
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