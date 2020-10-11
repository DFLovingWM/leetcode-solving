/**
 * delta法（扫描）
 */
var maxDepth = function(s) {
  let delta = 0;
  let res = 0;
  for (const ch of s) {
    if (ch === '(') {
      ++delta;
      res = Math.max(res, delta);
    } else if (ch === ')') {
      --delta;
    }
  }
  return res;
};