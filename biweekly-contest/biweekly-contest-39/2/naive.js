/**
 * 贪心
 */
var minimumDeletions = function(s) {
  const n = s.length;

  // 预处理
  const rightA = Array.from({ length: n }, () => 0);
  rightA[n - 1] = (s[n - 1] === 'a' ? 1 : 0);
  for (let i = n - 2; i >= 0; --i) {
    rightA[i] = rightA[i + 1] + (s[i] === 'a' ? 1 : 0);
  }

  // 遍历
  let res = n;
  let acc = 0;
  for (let i = 1; i < n; ++i) {
    // 不合理情况
    if (s[i - 1] === 'b' && s[i] === 'a') {
      // 1、删除a，那之后的所有a都需要删除，马上出答案
      res = Math.min(res, acc + rightA[i]);
      // 2. 删除b，那么继续累计
      ++acc;
    }
  }
  res = Math.min(res, acc);
  return res;
};