/**
 * 位压缩 + 遍历子集
 * 参考：https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/solution/wei-yun-suan-mapying-she-by-jameywoo/
 * 
 * 时间：`O(NlogN) <= O(128N)`, 172ms
 */
var findNumOfValidWords = function (words, puzzles) {
  const count = new Map()
  for (const word of words) {
    const bitset = getBitset(word)
    count.set(bitset, (count.get(bitset) || 0) + 1)
  }

  return puzzles.map(puzzle => {
    const puzzleBitset = getBitset(puzzle)
    const first = getBitset(puzzle[0])
    let res = 0

    // 关键逻辑：遍历该puzzle的子集
    for (let n = puzzleBitset; n; n = (n - 1) & puzzleBitset) { // 注意这个位操作很秀
      if (n & first) {
        res += count.get(n) || 0
      }
    }

    return res
  })
};

// 字符串 => 整数（bitset）的二进制表示
function getBitset (word) {
  const a = 'a'.charCodeAt(0)
  let res = 0

  for (const ch of word) {
    const n = 1 << (ch.charCodeAt(0) - a)
    res |= n
  }

  return res
}

module.exports = findNumOfValidWords