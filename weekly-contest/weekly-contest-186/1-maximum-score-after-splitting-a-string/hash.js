/**
 * 哈希表预处理
 * 
 * 时间：O(N)
 */
var maxScore = function(s) {
  const n = s.length;

  // left[i]表示前`i`个字符中0的个数
  const left = Array.from({ length: n + 1 }, () => 0);
  for (let i = 1; i <= n; ++i) {
    left[i] = left[i - 1] + (s[i - 1] === '0' ? 1 : 0);
  }

  // right[i]表示后`i`个字符中1的个数
  const right = Array.from({ length: n + 1 }, () => 0);
  for (let i = 1; i <= n; ++i) {
    right[i] = right[i - 1] + (s[n - i] === '1' ? 1 : 0);
  }

  let res = 0;
  for (let i = 1; i <= n - 1; ++i) { // 左右子串都非空
    const score = left[i] + right[n - i];
    res = Math.max(res, score);
  }
  return res;
};

[
  '011101',
  '00111',
  '1111'
].forEach(s => {
  console.log(maxScore(s))
})