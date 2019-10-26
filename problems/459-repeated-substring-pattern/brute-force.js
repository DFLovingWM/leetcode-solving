/**
 * 
 * - Time: O(N2), 104ms
 * - Space: O(1), 42.7MB
 */
function repeatedSubstringPattern (str) {
  if (str.length <= 1) return false

  let pattern = ''
  let limit = Math.floor(str.length / 2)

  for (let i = 0; i <= limit; ++i) {
    pattern += str[i]
    if (str.length % pattern.length === 0 && str.length > pattern.length) {
      if (pattern.repeat(str.length / pattern.length) === str) {
        return true
      }
    }
  }

  return false
}

// [
//   "abab",
//   "aba",
//   "abcabcabcabc",
//   "aa",
//   "a",
//   "",
//   "abaababaab",
//   "ab"
// ].forEach(input => {
//   console.log(input, '=>', repeatedSubstringPattern(input))
// })
