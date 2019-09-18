/**
 * Brute force.
 * - Time: O(N2 * K), which K means average length of words. 3496ms.
 * - Space: O(1), 54.6MB
 */
function palindromePairs (words) {
  let pairs = []

  for (let i = 0; i < words.length; ++i) {
    for (let j = 0; j < words.length; ++j) {
      if (i !== j && isPalindrome(words[i] + words[j])) {
        pairs.push([i, j])
      }
    }
  }

  return pairs
}

function isPalindrome (str) {
  let L = 0, R = str.length - 1
  while (L <= R && str[L] === str[R]) {
    ++L
    --R
  }
  return L > R
}