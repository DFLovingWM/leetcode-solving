const assert = require('assert')
const solve = require('./dfs')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let input = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
    let root = constructBinaryTree(input)
    let result = solve(root, sum)
    let expectedResult = 3
    assert.equal(result, expectedResult)
  })
})

describe('测试边界', () => {
  it('空树', () => {
    let input = [], sum = 0
    let root = constructBinaryTree(input)
    let result = solve(root, sum)
    let expectedResult = 0
    assert.equal(result, expectedResult)
  })
})