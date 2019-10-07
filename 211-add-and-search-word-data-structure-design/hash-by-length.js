/**
 * 根据单词长度哈希，然后线性比较
 * 
 * 时间：204ms
 * 空间：57MB
 */
var WordDictionary = function() {
  this.len2Words = new Map()
};

// O(1)
WordDictionary.prototype.addWord = function(word) {
  const length = word.length
  if (!this.len2Words.has(length)) {
    this.len2Words.set(length, new Set())
  }
  this.len2Words.get(length).add(word)
};

// O(NL)
WordDictionary.prototype.search = function(pattern) {
  const length = pattern.length
  if (!this.len2Words.has(length)) return false

  const words = this.len2Words.get(length)
  for (const word of words) { // 线性遍历
    if (canBeSame(word, pattern)) return true
  }
  return false
};

// O(L)
function canBeSame (word, pattern) {
  for (let i = 0; i < word.length; ++i) {
    if (pattern[i] !== '.' && pattern[i] !== word[i]) {
      return false
    }
  }
  return true
}
