/**
 * 索引排序/计数排序
 * 
 * 时间：`O(2N)=O(N)`
 * 空间：`O(1)`
 */
var sortColors = function (nums) {
  const freq = new Array(3).fill(0)
  for (const n of nums) {
    ++freq[n]
  }

  let j = 0
  for (let i = 0; i <= 2; ++i) {
    let cnt = freq[i]
    while (cnt--) {
      nums[j++] = i
    }
  }
};

module.exports = sortColors