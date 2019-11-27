/**
 * 回溯 + 哈希预处理
 * 
 * 时间：364ms
 */
const pair = getPairs()

// 提前hardcode出所有相隔的数字
function getPairs () {
  const pairs = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => -1))
  const blocks = [
    [1, 3, 7, 9],
    [2, 8],
    [4, 6]
  ]
  for (const block of blocks) {
    for (const a of block) {
      for (const b of block) {
        if (a !== b) {
          pairs[a][b] = pairs[b][a] = (a + b) / 2
        }
      }
    }
  }
  return pairs
}

var numberOfPatterns = function (min, max) {
  let res = 0
  const used = new Set()
  
  /**
   * 递归函数
   * @param {number} prev 上一次选择的数字
   */
  function backtrack (prev) {
    const len = used.size

    if (len > max) return
    if (len >= min) ++res

    for (let curr = 1; curr <= 9; ++curr) {
      if (!used.has(curr)) {
        // 能连接的2个数字需要满足：
        // 不隔着数字，或者隔着的数字已被使用
        if (pair[curr][prev] === -1 || used.has(pair[curr][prev])) {
          used.add(curr)
          backtrack(curr)
          used.delete(curr)
        }
      }
    }
  }

  backtrack(0)
  return res
};

module.exports = numberOfPatterns