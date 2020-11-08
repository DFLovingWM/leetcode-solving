/**
 * 字符串识别
 */
var minOperations = function(logs) {
  let delta = 0;
  for (const log of logs) {
    if (log === '../') {
      delta = Math.max(0, delta - 1);
    } else if (log === './') {
      delta = delta;
    } else {
      ++delta;
    }
  }
  return delta;
};