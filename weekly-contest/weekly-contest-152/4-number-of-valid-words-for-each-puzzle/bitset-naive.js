/**
 * 位压缩与位操作
 * 
 * 时间：`O(NM)`, 6092ms，勉强AC
 */
var findNumOfValidWords = function (words, puzzles) {
  const wordList = []
  for (const word of words) {
    if (new Set(Array.from(word)).size > 7) continue // 多于7种字母 => 不可能是答案，抛弃
    wordList.push(getBitset(word))
  }

  return puzzles.map(puzzle => {
    const puzzleBitset = getBitset(puzzle)
    const first = getBitset(puzzle[0])
    let res = 0

    for (const word of wordList) {
      const firstCh = Boolean(word & first) // 条件1：word有puzzle的首字母
      if (!firstCh) continue
      const allChs = (puzzleBitset | word) === puzzleBitset // 条件2：puzzle有word的全部字母
      if (!allChs) continue
      ++res
    }

    return res
  })
};

// 字符串 => 整数（bitset）的二进制表示
function getBitset (word) {
  let res = 0
  const a = 'a'.charCodeAt(0)
  for (const ch of word) {
    const n = 1 << (ch.charCodeAt(0) - a)
    res |= n
  }
  return res
}

module.exports = findNumOfValidWords