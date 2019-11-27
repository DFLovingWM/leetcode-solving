/**
 * delta法：+1/-1
 */
var removeOuterParentheses = function (S) {
  let delta = 0
  let res = ''

  for (const ch of S) {
    if (ch === '(' && delta !== 0 || ch === ')' && delta !== 1) {
      res += ch
    }
    if (ch === '(') {
      ++delta
    } else if (ch === ')') {
      --delta
    }
  }

  return res
};

module.exports = removeOuterParentheses