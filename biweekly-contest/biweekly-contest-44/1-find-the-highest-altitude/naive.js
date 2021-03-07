/**
 * 模拟向前走
 */
var largestAltitude = function(gain) {
  let curr = 0;
  let res = 0;
  for (const num of gain) {
    curr += num;
    res = Math.max(res, curr);
  }
  return res;
};