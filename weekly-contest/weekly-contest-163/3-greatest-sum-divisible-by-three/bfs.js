/**
 * BFS推导
 * 
 * 时间：`O(N)`
 * 空间：`O(1)`
 */
var maxSumDivThree = function (nums) {
  // currs[i]表示被3除、余数为i的最大和
  let currs = [0, -Infinity, -Infinity]

  for (const num of nums) {
    const nexts = currs.slice()

    for (let i = 0; i < 3; ++i) {
      const j = (i + num) % 3
      nexts[j] = Math.max(nexts[j], currs[i] + num)
    }

    currs = nexts
  }

  return currs[0]
};

module.exports = maxSumDivThree