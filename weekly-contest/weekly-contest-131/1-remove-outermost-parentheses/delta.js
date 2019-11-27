/**
 * +1/-1
 */
var removeOuterParentheses = function (S) {
  let delta = 0
  let res = ''
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(' && delta !== 0 || S[i] === ')' && delta !== 1) {
      res += S[i]
    }
    if (S[i] === '(') ++delta
    else if (S[i] === ')') --delta
  }
  return res
};

[
  '(()())(())',
  '(()())(())(()(()))',
  '()()',
].forEach(s => {
  console.log(removeOuterParentheses(s))
})