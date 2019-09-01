/**
 * 纯数字解决：位数颠倒（一半即可）
 * 耗时：320ms
 */
var isPalindrome = function(x) {
  if (x < 0) {
    // 负数不是回文数
    return false
  }
  if (x !== 0 && x % 10 === 0) {
    // 最后一位为0的，不是回文数（当然，0是回文数，要排除掉）
    return false
  }

  let y = 0
  while (x > y) { // 转化到中间位置，就停止
    let tmp = x % 10
    x = Math.floor(x / 10)
    y = y * 10 + tmp
  }
  return x === y || Math.floor(y / 10) === x
};

[
  0,
  121,
  -121,
  10,
].forEach(x => {
  console.log(isPalindrome(x))
})
