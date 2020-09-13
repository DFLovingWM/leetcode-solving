/**
 * 枚举
 */
var minDifference = function(nums) {
  if (nums.length <= 4) return 0;

  nums.sort((a, b) => a - b);

  let ans = Infinity;
  for (let i = 0; i <= 1; ++i) {
    for (let j = 0; j <= 1; ++j) {
      for (let k = 0; k <= 1; ++k) {
        let left = 0, right = nums.length - 1;
        i === 0 ? ++left : --right;
        j === 0 ? ++left : --right;
        k === 0 ? ++left : --right;
        const arr = nums.slice(left, right + 1);
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        ans = Math.min(ans, max - min);
      }
    }
  }

  return ans;
};