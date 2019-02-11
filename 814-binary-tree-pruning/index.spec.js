const assert = require('assert')
const solve = require('./recursion-v2')
const constructBinaryTree = require('../utils/construct-binary-tree/construct-binary-tree.js')
const isSameTree = require('../utils/construct-binary-tree/is-same-tree.js')

describe('测试一般例子', () => {
  it('例子1', () => {
    let srcArr = [1,null,0,0,1]
    let srcTree = constructBinaryTree(srcArr)
    solve(srcTree)

    let destArr = [1,null,0,null,1]
    let destTree = constructBinaryTree(destArr)

    assert(isSameTree(srcTree, destTree))
  })

  it('例子2', () => {
    let srcArr = [1,0,1,0,0,0,1]
    let srcTree = constructBinaryTree(srcArr)
    solve(srcTree)

    let destArr = [1,null,1,null,1]
    let destTree = constructBinaryTree(destArr)

    assert(isSameTree(srcTree, destTree))
  })

  it('例子3', () => {
    let srcArr = [1,1,0,1,1,0,1,0]
    let srcTree = constructBinaryTree(srcArr)
    solve(srcTree)

    let destArr = [1,1,0,1,1,null,1]
    let destTree = constructBinaryTree(destArr)

    assert(isSameTree(srcTree, destTree))
  })
})

describe('测试边界', () => {
  it('例子1', () => {
    let srcArr = []
    let srcTree = constructBinaryTree(srcArr)
    solve(srcTree)

    let destArr = []
    let destTree = constructBinaryTree(destArr)

    assert(isSameTree(srcTree, destTree))
  })
})
