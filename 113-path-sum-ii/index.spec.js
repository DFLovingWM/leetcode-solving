const assert = require('assert')
const solve = require('./dfs')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let input = [5,4,8,11,null,13,4,7,2,null,null,5,1]
    let root = constructBinaryTree(input)
    let result = solve(root, 22)
    let expectedResult = [
      [5,4,11,2],
      [5,8,4,5]
   ]
    assert.deepEqual(result, expectedResult)
  })

  it('例子2', () => {
    let input = [1]
    let root = constructBinaryTree(input)
    let result = solve(root, 1)
    let expectedResult = [[1]]
    assert.deepEqual(result, expectedResult)
  })
})

describe('测试边界', () => {
  it('空树', () => {
    let input = []
    let root = constructBinaryTree(input)
    let result = solve(root, 0)
    let expectedResult = []
    assert.deepEqual(result, expectedResult)
  })
})