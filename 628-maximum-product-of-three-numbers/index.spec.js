const assert = require('assert')
const solve = require('./no-sort')

describe('Basic function testing', () => {
  it('General case 1', () => {
    let input = [-4,-3,-2,-1,60]
    let output = solve(input)
    let expected = 720
    assert.equal(output, expected)
  })

  it('All positive', () => {
    let input = [1,2,3,4]
    let output = solve(input)
    let expected = 24
    assert.equal(output, expected)
  })

  it('All negative', () => {
    let input = [-4, -3, -2, -1]
    let output = solve(input)
    let expected = -6
    assert.equal(output, expected)
  })
})

describe('Boundary testing', () => {
  it('Just 3 elements', () => {
    let input = [-4, -3, -1]
    let output = solve(input)
    let expected = -12
    assert.equal(output, expected)
  })
})