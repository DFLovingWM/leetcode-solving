/**
 * BFS：模拟回溯（分支限界？）
 * 
 * 时间：188ms
 */
var removeInvalidParentheses = function (S) {
  let currs = new Set([S])

  while (true) {
    let res = []
    for (const s of currs) {
      if (isValid(s)) {
        res.push(s)
      }
    }
    if (res.length > 0) {
      // 剪枝：因为只需要找最长的，所以某一层一旦有结果，就不用继续往下了
      return res
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

module.exports = removeInvalidParentheses