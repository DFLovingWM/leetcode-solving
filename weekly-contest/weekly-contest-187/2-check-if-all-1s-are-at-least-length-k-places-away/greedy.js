/**
 * 贪心：比较相邻的1的距离即可
 */
var kLengthApart = function(nums, k) {
  let prev = -Infinity; // 上一个1的位置
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 1) {
      if (i - prev <= k) { // 这个1与上一个1比较
        return false;
      }
      prev = i;
    }
  }
  return true;
};

[
  [[1,0,0,0,1,0,0,1], 2],
  [[1,0,0,1,0,1], 2],
  [[1,1,1,1,1], 0],
  [[0,1,0,1], 1],
].forEach(A => {
  console.log(kLengthApart(...A))
})