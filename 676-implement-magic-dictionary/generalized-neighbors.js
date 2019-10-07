/**
 * 生成邻居单词
 * 
 * 时间：96ms
 * 空间：34.1MB
 */
var MagicDictionary = function () {
  this.len2Words = new Map()
};

// O(NL)
MagicDictionary.prototype.buildDict = function (dict) {
  for (const word of dict) {
    const length = word.length

    if (!this.len2Words.has(length)) {
      this.len2Words.set(length, new Map())
    }
    const words = this.len2Words.get(length)

    // 添加word的所有邻居，带'*'字符
    for (let i = 0; i < length; ++i) {
      const neighbor = word.slice(0, i) + '*' + word.slice(i + 1)
      if (!words.has(neighbor)) {
        words.set(neighbor, new Set())
      }
      words.get(neighbor).add(word[i]) // 记录已有字符，查询时需要排除
    }
  }
};

// O(L)
MagicDictionary.prototype.search = function (word) {
  const length = word.length
  if (!this.len2Words.has(length)) return false

  const words = this.len2Words.get(length)

  for (let i = 0; i < length; ++i) {
    const neighbor = word.slice(0, i) + '*' + word.slice(i + 1)
    if (words.has(neighbor)) {
      const exclusiveCharSet = words.get(neighbor)
      const firstChar = exclusiveCharSet.keys().next().value
      if (exclusiveCharSet.size > 1 || firstChar !== word[i]) {
        // 如果字符数大于1，或者唯一的字符不等于该字符，就表明有邻居，返回true
        return true
      }
    }
  }

  return false
};
