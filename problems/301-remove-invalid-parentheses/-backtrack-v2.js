/**
 * 回溯：从S开始，每次删除一个括号
 */
var removeInvalidParentheses = function (S) {
  const res = new Map()
  let maxLen = 0

  function backtrack (S) {
    if (isValid(S)) {
      if (S.length < maxLen) return
      maxLen = S.length
      if (!res.has(S.length)) {
        res.set(S.length, new Set())
      }
      res.get(S.length).add(S)
    } else {
      for (let i = 0; i < S.length; ++i) { // 遍历可以删除的字符
        if (S[i] === '(' || S[i] === ')') {
          const nextS = S.slice(0, i).concat(S.slice(i + 1))
          backtrack(nextS)
        }
      }
    }
  }

  backtrack(S)
  return Array.from(res.get(maxLen))
};

function isValid (S) {
  let delta = 0

  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(') {
      ++delta
    } else if (S[i] === ')') {
      --delta
    }

    if (delta < 0) return false
  }

  return delta === 0
}

module.exports = removeInvalidParentheses