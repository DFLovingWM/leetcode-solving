const assert = require('assert')
// const longestPalindrome = require('./brute-force')
const longestPalindrome = require('./bi-expand')

describe(`5`, () => {
  it(`(1)`, () => {
    const answers = ['aba', 'bab']
    const result = longestPalindrome('babad')
    console.log('结果：', result)
    assert( answers.includes(result) )
  })

  it(`(2)`, () => {
    const result = longestPalindrome('cbbd')
    console.log('结果：', result)
    assert( result === 'bb' )
  })

  it(`边界情况`, () => {
    assert( longestPalindrome('a') === 'a' )
  })
})