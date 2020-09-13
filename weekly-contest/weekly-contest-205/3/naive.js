/**
 * 贪心
 */
var minCost = function(s, cost) {
  let res = 0;
  const n = s.length;
  for (let i = 0; i < n; ++i) {
    if (i + 1 < n && s[i + 1] !== s[i]) continue;
    let sum = cost[i];
    let max = cost[i];
    for (++i; i < n && s[i] === s[i - 1]; ++i) {
      sum += cost[i];
      max = Math.max(max, cost[i]);
    }
    res += sum - max;
    --i;
  }
  return res;
};
