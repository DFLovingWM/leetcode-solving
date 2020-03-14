/**
 * 找最大值
 */
var numTimesAllBlue = function(lights) {
  let res = 0;
  let max = -Infinity;
  for (let i = 0; i < lights.length; ++i) {
    const light = lights[i];
    max = Math.max(max, light);
    if (max === i + 1) { // 满足排列相等
      ++res;
    }
  }
  return res;
};