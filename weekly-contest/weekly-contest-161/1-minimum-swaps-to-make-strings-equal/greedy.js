/**
 * 贪心
 * 
 * 时间：`O(N)`
 * 空间：`O(1)`
 */
var minimumSwap = function (s1, s2) {
  let [xy, yx] = [0, 0]
  let n = s1.length
  for (let i = 0; i < n; ++i) {
    if (s1[i] === 'x' && s2[i] === 'y') {
      ++xy 
    } else if (s1[i] === 'y' && s2[i] === 'x') {
      ++yx
    }
  }


  // 贪心：xx对yy、yy对xx，都只需要1步
  let res = Math.floor(xy / 2) * 1 + Math.floor(yx / 2) * 1
  // 剩余
  xy %= 2
  yx %= 2
  // 不成对，就失败
  if (xy + yx === 1) return -1
  if (xy + yx === 2) res += 2

  return res
};

module.exports = minimumSwap