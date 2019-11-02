/**
 * 贪心：奇数位置小、偶数位置大，检测之
 * 
 * 时间：`O(N)`
 */
var wiggleSort = function (nums) {
  for (let i = 0; i < nums.length - 1; ++i) {
    if (i % 2 === 0 && nums[i] > nums[i + 1] || i % 2 === 1 && nums[i] < nums[i + 1]) {
      swap(nums, i, i + 1)
    }
  }
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = wiggleSort