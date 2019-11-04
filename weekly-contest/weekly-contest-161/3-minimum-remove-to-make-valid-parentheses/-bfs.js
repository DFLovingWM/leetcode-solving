/**
 * BFS：模拟回溯（分支限界？）
 * 
 * 时间：188ms
 */
var minRemoveToMakeValid = function (S) {
  let currs = new Set([S])

  while (true) {
    for (const s of currs) {
      if (isValid(s)) {
        // 找到一个结果，就能提前退出
        return s
      }
    }

    const nexts = new Set()
    for (const s of currs) {
      for (let i = 0; i < s.length; ++i) {
        nexts.add(s.slice(0, i).concat(s.slice(i + 1)))
      }
    }
    currs = nexts
  }
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

module.exports = minRemoveToMakeValid