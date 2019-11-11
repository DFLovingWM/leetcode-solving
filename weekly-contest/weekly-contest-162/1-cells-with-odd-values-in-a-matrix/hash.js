/**
 * 使用哈希表：累计每一行、每一列的增量，最后再看每个位置是否为奇数
 * 
 * 时间：O(N^2), 64ms
 */
var oddCells = function (r, c, indices) {
  const rows = new Array(r).fill(0)
  const cols = new Array(c).fill(0)
  for (const [i, j] of indices) {
    ++rows[i]
    ++cols[j]
  }

  let res = 0
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      res += rows[i] + cols[j] & 1
    }
  }
  return res
};

module.exports = oddCells