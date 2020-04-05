/**
 * 找规律
 * 
 * 时间：O(N), 100ms
 */
var numSteps = function(s) {
  const n = s.length;

  // 定位到最低非0位
  let i = n - 1;
  while (i >= 0 && s[i] === '0') --i;

  // 数0/1的个数
  let zero = 0;
  let one = 0;
  for (; i >= 0; --i) {
    if (s[i] === '0') {
      ++zero;
    } else {
      ++one;
    }
  }

  // 特殊情况：只有1个1
  if (one === 1) return n - 1;
  return zero + 1 + n;
};

module.exports = numSteps;