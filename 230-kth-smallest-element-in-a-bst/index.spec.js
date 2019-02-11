const assert = require('assert')
const solve = require('./inorder')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let root = [3,1,4,null,2], k = 1
    root = constructBinaryTree(root)
    let result = solve(root, k)
    let expectedResult = 1
    assert.equal(result, expectedResult)
  })

  it('例子2', () => {
    let root = [5,3,6,2,4,null,null,1], k = 3
    root = constructBinaryTree(root)
    let result = solve(root, k)
    let expectedResult = 3
    assert.equal(result, expectedResult)
  })
})
