/**
 * Build a string from stratch, with some rules(below).
 * https://leetcode.com/problems/string-without-aaa-or-bbb/discuss/226648/Java-straightforward
 * 
 * - 时间：O(N)
 * - 空间：O(N)
 */
function strWithout3a3b (A, B) {
  let result = ''

  while (A + B > 0) {
    let { length } = result

    if (length >= 2 && result[length - 1] === result[length - 2]) { // Dangerous: if there has been 2 consecutively same letters, then add a different letter。
      if (result[length - 1] === 'a') {
        // add 'b'
        --B
        result += 'b'
      } else {
        // add 'a'
        --A
        result += 'a'
      }
    } else { // Safe, then add a letter that remains more(greedy)。
      if (A > B) {
        --A
        result += 'a'
      } else {
        --B
        result += 'b'
      }
    }
  }

  return result
}

console.log( strWithout3a3b(1, 1) )
console.log( strWithout3a3b(1, 2) )
console.log( strWithout3a3b(4, 1) )
console.log( strWithout3a3b(4, 4) )
console.log( strWithout3a3b(5, 6) )
console.log( strWithout3a3b(27, 33) )
console.log( strWithout3a3b(71, 81) )