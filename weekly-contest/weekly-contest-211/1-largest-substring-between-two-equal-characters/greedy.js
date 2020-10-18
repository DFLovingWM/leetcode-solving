/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  const first = new Map();
  let res = -1;
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (first.has(ch)) {
      res = Math.max(res, i - first.get(ch) - 1);
    } else {
      first.set(ch, i);
    }
  }
  return res;
};