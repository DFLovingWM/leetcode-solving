const assert = require('assert')
const solve = require('./dfs-with-prefix-sum')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('功能测试', () => {
  it('题目例子', () => {
    let input = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
    let root = constructBinaryTree(input)
    let result = solve(root, sum)
    let expectedResult = 3
    assert.equal(result, expectedResult)
  })

  it('WA过的例子', () => {
    let input = [5,4,8,11,null,13,4,7,2,null,null,5,1], sum = 22
    let root = constructBinaryTree(input)
    let result = solve(root, sum)
    let expectedResult = 3
    assert.equal(result, expectedResult)
  })
})

describe('边界测试', () => {
  it('空树', () => {
    let input = [], sum = 0
    let root = constructBinaryTree(input)
    let result = solve(root, sum)
    let expectedResult = 0
    assert.equal(result, expectedResult)
  })
})