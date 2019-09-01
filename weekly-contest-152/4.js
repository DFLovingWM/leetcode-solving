/**
 * Bit压缩：
 * 时间：O(N * M)，耗时4664ms
 * 参考：https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/discuss/371879/ChineseC%2B%2B-5176.-bitmap-and
 * 
 * 更多解法参考：https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/discuss/372025/3-cpp-solutions-brute-force-trie-and-two-fold-hash.
 */
var findNumOfValidWords = function(words, puzzles) {
  const wordBits = []
  for (const word of words) {
    let charset = new Set() // 优化：如果不同的字母多于7个，则该单词不可能是谜底
    if (charset.size > 7) continue
    wordBits.push(getBit(word))
  }

  const answers = []
  for (const puzzle of puzzles) {
    let count = 0
    const p = getBit(puzzle)
    const pFirst = getBit(puzzle[0])
    for (const w of wordBits) {
      if (
        ((pFirst & w) === pFirst) && // 谜底包含谜语首字母
        ((w & p) === w) // 谜语包含谜底所有字母
      ) {
        ++count
      }
    }
    answers.push(count)
  }

  return answers
};

// 单词转化为bit
function getBit (word) {
  let bit = 0
  for (const letter of word) {
    bit = bit | (1 << (letter.charCodeAt(0) - 'a'.charCodeAt(0)))
  }
  return bit
}

[
  [
    ["aaaa","asas","able","ability","actt","actor","access"], 
    ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
  ],
].forEach(input => {
  console.log(findNumOfValidWords(...input))
})