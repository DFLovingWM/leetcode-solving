function shortestPalindrome (str) {
  let i
  for (i = str.length - 1; i >= 0; --i) { // Search a palindrome string from tail.
    if (isPalindrome(str, 0, i)) {
      break
    }
  }
  return [...str.slice(i + 1)].reverse().join('') + str
}

function isPalindrome (str, left = 0, right = str.length - 1) {
  let L = left, R = right
  while (L <= R && str[L] === str[R]) {
    ++L
    --R
  }
  return R < L
}

['abcbabcab', 'abcd', 'aabb'].forEach(input => {
  console.log(shortestPalindrome(input))
})