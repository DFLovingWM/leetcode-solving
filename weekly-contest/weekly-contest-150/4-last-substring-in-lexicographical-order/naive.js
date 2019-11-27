/**
 * 求最大的后缀
 * 
 * 时间：`O(N^2)`
 */
var lastSubstring = function (S) {
  let res = ''
  let suffix = ''
  for (let i = S.length - 1; i >= 0; --i) {
    suffix = S[i] + suffix
    if (suffix > res) res = suffix
  }
  return res
};

module.exports = lastSubstring