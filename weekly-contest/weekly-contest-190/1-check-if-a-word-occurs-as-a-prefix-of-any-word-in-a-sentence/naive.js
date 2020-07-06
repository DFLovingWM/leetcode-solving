/**
 * 暴力
 * 
 * 时间：O(NL), 72ms
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const words = sentence.split(' ');
  for (const [i, word] of words.entries()) {
    if (word.startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};