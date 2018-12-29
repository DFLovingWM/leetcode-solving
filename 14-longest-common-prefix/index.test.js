// const {longestCommonPrefix} = require('./trie')
const {longestCommonPrefix} = require('./brute-force')
const assert = require('assert')

describe(`测试正确性`, () => {
  it(`题目示范例子`, () => {
    assert.equal(longestCommonPrefix(["flower","flow","flight"]), 'fl')
  })

  it(`题目测试例子`, () => {
    assert.equal(longestCommonPrefix(['', 'b']), '')
    // assert( longestCommonPrefix(['', 'b']) === '' )
  })
})
