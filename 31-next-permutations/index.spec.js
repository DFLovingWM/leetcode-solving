const assert = require('assert')
// const nextPermutation = require('./simple')
// const nextPermutation = require('./simple-optimization')
const nextPermutation = require('./dfs')

describe('31', () => {
  it('例子1', () => {
    let arr = [1,2,3]
    nextPermutation(arr)
    assert.deepEqual(arr, [1,3,2])
  })
  it('例子2', () => {
    let arr = [3,2,1]
    nextPermutation(arr)
    assert.deepEqual(arr, [1,2,3])
  })
  it('例子3', () => {
    let arr = [1,1,5]
    nextPermutation(arr)
    assert.deepEqual(arr, [1,5,1])
  })
  it('例子4', () => {
    let arr= [1,3,2]
    nextPermutation(arr)
    assert.deepEqual(arr, [2, 1, 3])
  })
  
  it('重复元素', () => {
    let arr = [2,3,1,3,3]
    nextPermutation(arr)
    assert.deepEqual(arr, [2, 3, 3, 1, 3])
  })

  it('重复排列而且不是连续', () => {
    let arr= [1,5,1]
    nextPermutation(arr)
    assert.deepEqual(arr, [5,1,1])
  })
})