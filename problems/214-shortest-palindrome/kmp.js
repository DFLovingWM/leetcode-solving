/**
 * KMP solution.
 * 
 * - Time: O(N), 92ms
 * - Space: O(N), 36.9MB
 * 
 * Reference: https://leetcode.com/problems/shortest-palindrome/solution/
 */
function shortestPalindrome (str) {
  let reversedStr = str.split('').reverse().join(''),
      newStr = str + ' ' + reversedStr
  let next = getNext(newStr),
      length = next[next.length - 1] // Length of longest suffix which is the same to prefix.
  return reversedStr.slice(0, reversedStr.length - length) + str
}

function getNext (str) {
  let next = Array.from({ length: str.length })
  next[0] = 0

  for (let j = 0, i = 1; i < str.length; ++i) {
    while (j >= 1 && str[j] !== str[i]) {
      j = next[j - 1]
    }

    if (str[j] === str[i]) {
      next[i] = ++j
    } else {
      next[i] = j
    }
  }

  return next
}

// [
//   'aacecaaa',
//   'abcd',
//   'abbac'
// ].forEach(input => {
//   console.log(shortestPalindrome(input))
// })