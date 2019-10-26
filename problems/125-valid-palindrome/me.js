/**
 * 先过滤，再判断
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  return isP(s)
};

function isP (s) {
  let [L, R] = [0, s.length - 1]
  while (L < R) {
    if (s[L] !== s[R]) return false
    ++L
    --R
  }
  return true
}

[
  "A man, a plan, a canal: Panama",
  "race a car"
].forEach(s => {
  console.log(isPalindrome(s))
})