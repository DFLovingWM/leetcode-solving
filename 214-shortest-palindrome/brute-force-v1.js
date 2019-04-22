/**
 * - Time: O(N2), 412ms
 * - Space: O(1), 36.3MB
 */
function shortestPalindrome (str) {
  let L, R
  let nextL
  let length = str.length
  
  if (length % 2 === 0) {
    R = Math.floor(length / 2)
    L = R - 1
    nextL = true
  } else {
    L = Math.floor(length / 2) - 1
    R = L + 2
    nextL = false
  }

  while (true) {
    let [l, r] = [L, R];
    while (l >= 0 && r < length && str[l] === str[r]) {
      --l
      ++r
    }

    if (l < 0) { // Bingo!
      return reverse(str.slice(r)) + str
    }

    if (nextL) {
      --L
    } else {
      --R
    }
    nextL = !nextL
  }
}

function reverse (str) {
  return str.split('').reverse().join('')
}