let result = null

/**
 * DFS枚举：O(2^N)，太慢了
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
function strWithout3a3b (A, B) {
  result = null
  nextPermutation('', A + B, A, B)
  return result
}

function nextPermutation (str, wholeLength, remainA, remainB) {
  if (!isValid(str)) { // Prune.
    return
  }

  if (wholeLength === str.length) { // Result found.
    result = str
    return
  }

  if (remainA > 0) {
    nextPermutation(str + 'a', wholeLength, remainA - 1, remainB)
  }
  if (result !== null) return
  if (remainB > 0) {
    nextPermutation(str + 'b', wholeLength, remainA, remainB - 1)
  }
}

function isValid (str) {
  return !str.includes('aaa') && !str.includes('bbb')
}

console.log( strWithout3a3b(1, 2) )
console.log( strWithout3a3b(4, 1) )
console.log( strWithout3a3b(4, 4) )
console.log( strWithout3a3b(5, 6) )
console.log( strWithout3a3b(27, 33) )
console.log( strWithout3a3b(71, 81) )
