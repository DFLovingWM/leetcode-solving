/**
 * 前缀和
 * 
 * 时间：O(N), 104ms
 */
var maxVowels = function(s, k) {
  const n = s.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; ++i) {
    prefix[i] = prefix[i - 1] + ('aeiou'.includes(s[i - 1]) ? 1 : 0);
  }

  let res = 0;
  for (let i = k; i <= n; ++i) {
    res = Math.max(res, prefix[i] - prefix[i - k]);
  }
  return res;
};