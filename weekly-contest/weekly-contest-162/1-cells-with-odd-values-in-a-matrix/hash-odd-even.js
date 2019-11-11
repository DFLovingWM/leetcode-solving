/**
 * 使用哈希表：累计每一行、每一列的增量。奇元素数量 = 奇数行 * 偶数列 + 偶数行 * 奇数列
 * 参考：[天空的代码世界：Leetcode第162场比赛回顾](https://mp.weixin.qq.com/s/Oj6No_7tm7rr_fPzeETv3Q)
 * 
 * 时间：O(N), 64ms
 */
var oddCells = function (r, c, indices) {
  const rows = new Array(r).fill(0)
  const cols = new Array(c).fill(0)
  for (const [i, j] of indices) {
    ++rows[i]
    ++cols[j]
  }

  const rowOdd = rows.reduce((acc, item) => acc + (item & 1), 0)
  const colOdd = cols.reduce((acc, item) => acc + (item & 1), 0)
  
  return rowOdd * (c - colOdd) + colOdd * (r - rowOdd)
};

module.exports = oddCells