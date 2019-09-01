/**
 * 转化为字符串
 * 耗时：250ms
 */
var isPalindrome = function(x) {
  x = String(x)
  let [L, R] = [0, x.length - 1]
  while (L < R) {
    if (x[L] !== x[R]) return false
    ++L
    --R
  }
  return true
};

[
  121,
  -121,
  10,
].forEach(x => {
  console.log(isPalindrome(x))
})
