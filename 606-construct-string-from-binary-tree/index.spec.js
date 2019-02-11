const assert = require('assert')
const tree2str = require('./recursive.js')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let input = [1,2,3,4]
    let root = constructBinaryTree(input)
    let result = tree2str(root)
    let expectedResult = '1(2(4))(3)'
    assert.deepEqual(result, expectedResult)
  })

  it('例子2', () => {
    let input = [1,2,3,null,4]
    let root = constructBinaryTree(input)
    let result = tree2str(root)
    let expectedResult = '1(2()(4))(3)'
    assert.deepEqual(result, expectedResult)
  })
})

describe('测试边界', () => {
  it('空树', () => {
    let input = []
    let root = constructBinaryTree(input)
    let result = tree2str(root)
    let expectedResult = ''
    assert.deepEqual(result, expectedResult)
  })
})