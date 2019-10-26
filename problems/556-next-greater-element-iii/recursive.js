let stop = false
let last, result

const MAX = 1 << 31 - 1

/**
 * 与题目的v1、v2不同，这题就是考察permutation
 */
var nextGreaterElement = function(n) {
  let targetStr = String(n)
  let sortedStr = targetStr.split('').sort((a, b) => a - b).join('')

  last = result = null
  stop = false
  next(targetStr, '', sortedStr)

  return result === null || result > MAX ? -1 : result
};

function next (target, acc, residue) {
  if (residue.length === 0) {
    if (acc === target) {
      last = acc
    } else if (last === target) {
      stop = true
      result = acc
    }
  }
  for (let i = 0; i < residue.length; ++i) {
    if (i === 0 || residue[i] !== residue[i - 1]) { // 去重，为了保证递增顺序
      next(target, acc + residue[i], residue.slice(0, i).concat(residue.slice(i + 1)))
    }
    if (stop) return
  }
}

/**
 * https://leetcode.com/problems/next-greater-element-iii/discuss/101825/C%2B%2B-Solution-with-explanation
 */
class Permutation {
  constructor (str) {
    this.str = str
    this.target = Array.from(str)
    this.curr = []
    this.sortedChars = Array.from(str).sort((a, b) => a - b)
    this.stop = false
    this.init()
  }

  init () {
    if (this.equal(this.curr, this.target)) {
      this.stop = true
      return
    }
    for (let i = ; i < this.chars.length; ++i) {
      this.curr.push()
    }
  }

  next () {

  }

  equal (A, B) {
    return A.every((a, i) => a === B[i])
  }

  static dfs ()
}

[
  12443322, // 13222344
  1999999999,
].forEach(n => {
  console.log(nextGreaterElement(n))
})