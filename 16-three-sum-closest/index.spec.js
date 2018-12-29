const assert = require('power-assert')
const { threeSumClosest } = require('./two-pointer')

describe(`测试双指针法`, _ => {
  it(`题目例子`, done => {
    assert( threeSumClosest([1, 2, -1, -4], 1) === 2 )
    done()
  })
})