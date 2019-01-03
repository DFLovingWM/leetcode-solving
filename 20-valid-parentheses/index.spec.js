const isValid = require('./stack')
const assert = require('assert')

describe(`判断括号表达式是否合法`, () => {
  it(`题目例子`, () => {
    assert(isValid(''))
    assert(isValid("()"))
    assert(isValid("()[]{}"))
    assert(!isValid("(]"))
    assert(!isValid("([)]"))
    assert(isValid("{[]}"))
  })
})