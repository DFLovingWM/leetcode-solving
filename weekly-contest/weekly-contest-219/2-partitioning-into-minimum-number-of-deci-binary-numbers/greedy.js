/**
 * 贪心
 */
var minPartitions = function(n) {
  let maxCh = 0;
  for (let i = 0; i < n.length; ++i) {
    maxCh = Math.max(maxCh, Number(n[i]));
  }
  return maxCh;
};