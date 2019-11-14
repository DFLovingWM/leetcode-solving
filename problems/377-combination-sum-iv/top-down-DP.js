/**
 * Top-down DP
 * 
 * 时间：`O(NV)`, 68ms
 */
var combinationSum4 = function (nums, target) {
  const cache = new Map()

  /**
   * 递归函数：表示当前为`curr`、最后达到`target`的组合数
   */
  function helper (curr) {
    if (curr === target) { // 相等，终止，累计+1
      return 1
    } else if (curr > target) { // 超过了，也要终止
      return 0
    }

    if (cache.has(curr)) return cache.get(curr)

    let res = 0
    for (const num of nums) {
      res += helper(curr + num) // 逼近target
    }
    cache.set(curr, res)
    return res
  }

  return helper(0)
};

module.exports = combinationSum4