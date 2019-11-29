/**
 * 哈希表：记录最小下标
 * 
 * 时间：`O(N)`, 148ms
 */
var findMaxLength = function (nums) {
  nums = nums.map(n => n || -1) // 将0转化为-1

  // 求和为0的子数组的最大长度
  let res = 0
  let acc = 0
  const appear = new Map([[0, -1]]) // 值 => 首次出现的下标

  for (let i = 0; i < nums.length; ++i) {
    acc += nums[i]
    
    // 如果i能找到j，就更新答案
    if (appear.has(acc - 0)) {
      res = Math.max(res, i - appear.get(acc - 0))
    }

    // 如果Ai是第一次出现，则记录其下标
    if (!appear.has(acc)) {
      appear.set(acc, i)
    }
  }

  return res
};

module.exports = findMaxLength