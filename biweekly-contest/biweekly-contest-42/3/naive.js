/**
 * 找规律，贪心
 * 
 * 时间：O(N), 196ms
 */
var maximumBinaryString = function(binary) {
  // 特殊情况: 如果 0 的数量只有1/0个，就不用改变
  let zero = 0;
  for (const ch of binary) {
    if (ch === '0') {
      ++zero;
    }
  }
  if (zero <= 1) {
    return binary;
  }

  // 一般情况：「开头的连续1」维持原位，其它的都堆到最后
  const n = binary.length;
  let j = 0;
  while (binary[j] === '1') ++j;
  let tailOne = 0;
  for (; j < n; ++j) {
    if (binary[j] === '1') ++tailOne;
  }
  return '1'.repeat(n - tailOne - 1) + '0' + '1'.repeat(tailOne);
};

// [
//   '000110',
//   '01',
// ].forEach(s => {
//   console.log(maximumBinaryString(s))
// })