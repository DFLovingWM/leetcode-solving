/**
 * Top-down DP
 */
var canJump = function (nums) {
  const cache = new Map()

  // 表示位置`i`是否可达（从`i`开始是否能跳到终点）
  function helper (i) {
    if (i >= nums.length - 1) return true
    if (cache.has(i)) return cache.get(i)

    let res = false
    for (let acc = 1; acc <= nums[i]; ++acc) {
      if (helper(i + acc)) {
        res = true
        break
      }
    }
    cache.set(i, res)
    return res
  }

  return helper(0)
};

module.exports = canJump