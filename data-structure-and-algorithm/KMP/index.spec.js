const assert = require('assert')
const indexOf = require('./kmp-v2')

describe('测试KMP', () => {

  describe('功能测试', () => {
    it('匹配，返回第一个匹配的from位置', () => {
      let text = 'abcdfabcdabcdefg'
      let pattern = 'abcde'
      assert.equal(indexOf(text, pattern), text.indexOf(pattern))
    })

    it('匹配，返回第一个匹配的from位置', () => {
      let text = 'aaaxaaaxaaab'
      let pattern = 'aaab'
      assert.equal(indexOf(text, pattern), text.indexOf(pattern))
    })

    it('不能匹配，返回-1', () => {
      let text = 'abcdfabcdabcdefg'
      let pattern = 'abcdeff'
      assert.equal(indexOf(text, pattern), text.indexOf(pattern))
    })
  })

  describe('边界测试', () => {
    it('pattern为空', () => {
      let text = 'abcdfabcdabcdefg'
      let pattern = ''
      assert.equal(indexOf(text, pattern), text.indexOf(pattern))
    })

    it('text为空', () => {
      let text = ''
      let pattern = 'a'
      assert.equal(indexOf(text, pattern), text.indexOf(pattern))
    })
  })

})