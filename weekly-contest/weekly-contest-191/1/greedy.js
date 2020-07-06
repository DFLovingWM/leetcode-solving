/**
 * 找最大的两个值
 */
var maxProduct = function(nums) {
  let max = -Infinity;
  let max2 = -Infinity;
  for (const n of nums) {
    if (n > max) {
      [max, max2] = [n, max];
    } else if (n > max2) {
      max2 = n;
    }
  }
  return (max - 1) * (max2 - 1);
};