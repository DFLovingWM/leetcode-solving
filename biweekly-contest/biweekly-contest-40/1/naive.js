/**
 * 暴力
 */
var maxRepeating = function(sequence, word) {
  const max = Math.floor(sequence.length / word.length);
  for (let i = max; i > 0; --i) {
    if (sequence.includes(word.repeat(i))) {
      return i;
    }
  }
  return 0;
};