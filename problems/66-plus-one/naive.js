/**
 * 大数相加的简单版
 * 时间：O(N), 84ms
 */
var plusOne = function(digits) {
  const n = digits.length;
  let carry = 1;
  let i;
  for (i = n - 1; i >= 0; --i) {
    const tmp = digits[i] + carry;
    digits[i] = tmp % 10;
    carry = Math.floor(tmp / 10);
    // 如果没有carry了，可以提前退出
    if (carry === 0) {
      break;
    }
  }
  if (i < 0) {
    digits.unshift(carry);
  }
  return digits;
};