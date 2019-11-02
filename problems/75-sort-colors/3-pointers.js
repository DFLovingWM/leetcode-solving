/**
 * 3指针：头尾 + 遍历
 * 
 * 时间：`O(N)`, 80ms
 * 空间：`O(1)`
 */
var sortColors = function (nums) {
  let [L, R] = [-1, nums.length]
  let i = 0

  while (i < R) {
    if (nums[i] === 0) {
      ++L
      swap(nums, i, L)
      ++i
    } else if (nums[i] === 2) {
      --R
      swap(nums, i, R)
    } else {
      ++i
    }
  }
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = sortColors