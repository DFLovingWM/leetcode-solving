/**
 * 最简单的存储：数组
 */
var WordDictionary = function() {
  this.words = []
};

// O(1)
WordDictionary.prototype.addWord = function(word) {
  this.words.push(word)
};

// O(NL)
WordDictionary.prototype.search = function(pattern) {
  return this.words.some(word => canBeSame(word, pattern))
};

// O(L)
function canBeSame (word, pattern) {
  if (word.length !== pattern.length) {
    return false
  }
  for (let i = 0; i < word.length; ++i) {
    if (pattern[i] !== '.' && pattern[i] !== word[i]) {
      return false
    }
  }
  return true
}
