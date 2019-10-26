/**
 * 预处理一个单词的所有前后缀
 * 
 * 时间：700ms
 */

// O(N)
var WordFilter = function (words) {
  this.weight = new Map()
  for (const [index, word] of words.entries()) {
    const limit = Math.min(10, word.length)
    for (let i = 0; i <= limit; ++i) {
      for (let j = 0; j <= limit; ++j) {
        const key = getKey(word.slice(0, i), word.slice(word.length - j))
        this.weight.set(key, index)
      }
    }
  }
};

// O(1)
WordFilter.prototype.f = function (prefix, suffix) {
  const key = getKey(prefix, suffix)
  return this.weight.has(key) ? this.weight.get(key) : -1
};

function getKey (p, s) {
  return `${p}, ${s}`
}

module.exports = WordFilter