/**
 * 根据单词长度哈希
 * 
 * 时间：56ms
 * 空间：33.8MB
 */
var MagicDictionary = function() {
  this.len2Words = new Map()
};

// O(N)
MagicDictionary.prototype.buildDict = function(dict) {
  for (const word of dict) {
    const length = word.length
    if (!this.len2Words.has(length)) {
      this.len2Words.set(length, new Set())
    }
    this.len2Words.get(length).add(word)
  }
};

// O(M)，实际中有：M < N
MagicDictionary.prototype.search = function(word) {
  const length = word.length
  if (!this.len2Words.has(length)) return false

  for (const str of this.len2Words.get(length)) {
    if (getDiffCount(str, word) === 1) return true
  }
  return false
};

// O(L)
function getDiffCount (A, B) {
  let count = 0
  for (let i = 0; i < A.length; ++i) {
    if (A[i] !== B[i]) {
      ++count
    }
  }
  return count
}