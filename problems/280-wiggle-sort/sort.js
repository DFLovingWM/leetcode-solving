/**
 * 先排序，再两两交换
 * 
 * 时间：`O(NlogN)`, 108ms
 */
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length - 1; i += 2) {
    swap(nums, i, i + 1)
  }
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = wiggleSort