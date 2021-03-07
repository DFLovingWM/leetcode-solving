/**
 * 大数相加的简单版
 * 时间：O(N), 92ms
 */
var addBinary = function(a, b) {
  // 对齐两者的位数
  const len = Math.max(a.length, b.length);
  a = a.padStart(len, '0');
  b = b.padStart(len, '0');

  // 开始
  let carry = 0;
  let res = [];
  for (let i = len - 1; i >= 0; --i) {
    const tmp = carry + Number(a[i]) + Number(b[i]);
    res.push(tmp % 2);
    carry = Math.floor(tmp / 2);
  }
  if (carry) {
    res.push(carry);
  }
  return res.reverse().join('');
};
