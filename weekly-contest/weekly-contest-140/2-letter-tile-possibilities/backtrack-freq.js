/**
 * 频次 + 回溯
 * 
 * 时间：`O(2^N)`, 88ms
 */
var numTilePossibilities = function (tiles) {
  // 转化为频次
  const freq = new Map()
  for (const ch of tiles) {
    const code = getCode(ch)
    freq.set(code, (freq.get(code) || 0) + 1)
  }

  function backtrack () {
    let res = 1
    // 同一个位置，不能放相同字母
    const keys = Array.from(freq.keys())
    for (const i of keys) {
      if (freq.get(i) > 0) {
        // 探索
        freq.set(i, freq.get(i) - 1)
        res += backtrack()
        // 回溯
        freq.set(i, freq.get(i) + 1)
      }
    }
    return res
  }

  return backtrack() - 1
};

function getCode (capticalLetter) {
  return capticalLetter.charCodeAt(0) - 'A'.charCodeAt(0)
}

module.exports = numTilePossibilities