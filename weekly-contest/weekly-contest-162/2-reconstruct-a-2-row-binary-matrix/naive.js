/**
 * 先放2和0，然后再放1
 */
var reconstructMatrix = function (upper, lower, colsum) {
  const sum = colsum.reduce((a, b) => a + b, 0)
  if (upper + lower !== sum) return []

  const cols = colsum.length
  const res = Array.from({ length: 2 }, () => Array.from({ length: cols }, () => 0))

  // 先放2和0
  for (let i = 0; i < cols; ++i) {
    if (colsum[i] === 2) {
      res[0][i] = res[1][i] = 1
      --upper
      --lower
    } else if (colsum[i] === 0) {
      res[0][i] = res[1][i] = 0
    }
  }

  // 再放1：upper和lower放多的那一个，尽量保持平衡
  for (let i = 0; i < cols; ++i) {
    if (colsum[i] === 1) {
      if (upper >= lower) {
        --upper
        res[0][i] = 1
      } else {
        --lower
        res[1][i] = 1
      }
    }
  }

  // 最后要看upper、lower是否用完了
  return upper === 0 && lower === 0 ? res : []
};

module.exports = reconstructMatrix