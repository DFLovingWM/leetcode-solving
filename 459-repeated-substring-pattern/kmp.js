/**
 * KMP(the part of building next array) solution.
 * - Time: O(N), 100ms
 * - Space: O(N), 38.4MB
 * Refer to: https://leetcode.com/problems/repeated-substring-pattern/discuss/94397/C++-O(n)-using-KMP-32ms-8-lines-of-code-with-brief-explanation./98921
 */
function repeatedSubstringPattern (str) {
  let next = getNext(str)
  // console.log(str, '=>', next)
  let length = next.length
  let patternLength = length - next[length - 1] // Important! Need a little proval.
  return next[length - 1] > 0 && length % patternLength === 0
}

function getNext (arr) {
  let next = [0]

  for (let low = 0, high = 1; high < arr.length; ++high) {
    while (low > 0 && arr[low] !== arr[high]) {
      low = next[low - 1]
    }

    if (arr[low] === arr[high]) {
      next.push(++low)
    } else {
      next.push(0)
    }
  }

  return next
}

// [
//   'abaababaab',
//   'abcabcabc',
//   'abcabcabcabc'
// ].forEach(input => {
//   console.log(repeatedSubstringPattern(input))
// })