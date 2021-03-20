/**
 * 两种选择：
 * 1. 0 开始
 * 2. 1 开始
 */
var minOperations = function(s) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < s.length; ++i) {
    if (i % 2 === 0) {
      if (s[i] === '0') {
        ++a;
      } else {
        ++b;
      }
    } else {
      if (s[i] === '0') {
        ++b;
      } else {
        ++a;
      }
    }
  }
  return Math.min(a, b);
};
