/**
 * Bottom-up DP
 * 
 * 时间：O(N^2), 1628ms
 * 空间：O(N^2), 128.5MB
 */
const MIN = '-';

var largestMultipleOfThree = function(digits) {
  digits.sort((a, b) => b - a); // 降序排序

  // 因为0比较特殊，所以这里暂时只处理非0数字
  const nums = [];
  for (const digit of digits) {
    if (digit !== 0) {
      nums.push(digit);
    }
  }

  // 处理特殊情况
  const n = nums.length;
  if (n === 0) { // 没有非0数字
    if (digits.length === 0) return ''; // 没有数字
    return '0'; // 只有0
  }

  // 动态规划
  // 状态表示：dp[i][r]表示前i个数字中，余数为r的最大数字
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 3 }, () => MIN));
  // 边界
  dp[0][0] = '';
  // 迭代
  for (let i = 1; i <= n; ++i) {
    for (let k = 0; k < 3; ++k) {
      const num = nums[i - 1];
      const prevK = (k + 3 - num % 3) % 3;
      dp[i][k] = maxString(
        dp[i - 1][k], // 不取
        dp[i - 1][prevK] === MIN ? dp[i - 1][prevK] : dp[i - 1][prevK] + num // 取
      )
    }
  }

  // 目标
  let res = dp[n][0];
  const zeroCount = digits.length - n;
  if (res === MIN) { // 最大和为0
    if (zeroCount === 0) return '';
    return '0';
  }
  // 最后把所有0加上
  res += '0'.repeat(zeroCount);
  return res;
};

// 返回更大（表示的十进制数字更大）的字符串
// 涉及到大数，所以不用Number类型，要用String类型
function maxString(a, b) {
  if (a === MIN) return b;
  if (b === MIN) return a;

  const alen = a.length;
  const blen = b.length;
  if (alen !== blen) return alen > blen ? a : b; // 长度不等

  for (let i = 0; i < alen; ++i) {
    if (a[i] !== b[i]) return a[i] > b[i] ? a : b; // 某字符不等
  }

  return a; // a、b全等
}

module.exports = largestMultipleOfThree;