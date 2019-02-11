const assert = require('assert')
const solve = require('./dfs2')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let input = [5,4,8,11,null,13,4,7,2,null,null,null,1]
    let root = constructBinaryTree(input)
    let result = solve(root, 22)
    let expectedResult = true
    assert.equal(result, expectedResult)
  })

  it('例子2', () => {
    let input = [1,2]
    let root = constructBinaryTree(input)
    let result = solve(root, 1)
    let expectedResult = false
    assert.equal(result, expectedResult)
  })
})

describe('测试边界', () => {
  it('空树', () => {
    let input = []
    let root = constructBinaryTree(input)
    let result = solve(root, 0)
    let expectedResult = false
    assert.equal(result, expectedResult)
  })
})