/**
 * 回溯（使用HashSet）
 * 
 * 时间：76ms
 */
var permute = function (nums) {
  const res = []

  /**
   * 递归函数
   * @param {Set} numSet 剩余数字（这里用了集合，数组也可以）
   * @param {number[]} acc 当前排列
   */
  function backtrack (numSet, acc) {
    if (!numSet.size) {
      res.push(acc.slice())
      return
    }

    for (const n of Array.from(numSet)) {
      numSet.delete(n)
      acc.push(n)
      backtrack(numSet, acc)
      // 回溯
      numSet.add(n)
      acc.pop()
    }
  }

  backtrack(new Set(nums), [])
  return res
};

module.exports = permute