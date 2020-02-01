/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  const words = s.split(' ');
  const maxLen = words.reduce((acc, word) => Math.max(acc, word.length), 0);
  const res = Array.from({ length: maxLen }, () => Array.from({ length: words.length }, () => ' '));
  for (let i = 0; i < words.length; ++i) {
    for (let j = 0; j < words[i].length; ++j) {
      res[j][i] = words[i][j];
    }
  }
  return res.map(row => row.join('').trimEnd());
};