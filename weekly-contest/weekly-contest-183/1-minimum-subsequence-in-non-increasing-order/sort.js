/**
 * 排序：从最大的开始取，直到和超过一半
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  let sum = nums.reduce((acc, item) => acc + item, 0);

  const res = [];
  let acc = 0;

  for (let i = 0; i < nums.length; ++i) {
    res.push(nums[i]);
    acc += nums[i];
    if (acc * 2 > sum) { // 超过一半，可以停了
      break;
    }
  }

  return res;
};