const assert = require('assert')
const solve = require('./recursive')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let input = [1,2,2,3,4,4,3]
    let root = constructBinaryTree(input)
    let result = solve(root)
    let expectedResult = true
    assert.equal(result, expectedResult)
  })

  it('例子2', () => {
    let input = [1,2,2,null,3,null,3]
    let root = constructBinaryTree(input)
    let result = solve(root)
    let expectedResult = false
    assert.equal(result, expectedResult)
  })
})

describe('测试边界', () => {
  it('空树', () => {
    let input = []
    let root = constructBinaryTree(input)
    let result = solve(root)
    let expectedResult = true
    assert.equal(result, expectedResult)
  })
})