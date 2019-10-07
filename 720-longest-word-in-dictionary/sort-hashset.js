/**
 * 排序 + HashSet
 * 
 * 时间：O(NL + NlogN), 196ms
 */
var longestWord = function (words) {
  words.sort((a, b) => compareWord(a, b)) // 字符串升序

  const wordSet = new Set()
  let res = ''

  for (const word of words) {
    // 查看word的所有前缀
    let prefix = ''
    let i

    for (i = 0; i < word.length - 1; ++i) {
      prefix += word[i]
      if (!wordSet.has(prefix)) {
        break
      }
    }

    if (i === word.length - 1) {
      wordSet.add(word) // 这时候才加入集合，其它情况可以不加入，也算一个小小优化
      if (word.length > res.length) {
        res = word
      }
    }
  }

  return res
};

function compareWord (a, b) {
  if (a.length !== b.length) {
    return a.length < b.length ? -1 : a.length > b.length ? 1 : 0
  }

  for (let i = 0; i < a.length; ++i) {
    if (a[i] < b[i]) return -1
    if (a[i] > b[i]) return 1
  }
  return 0
}

module.exports = longestWord