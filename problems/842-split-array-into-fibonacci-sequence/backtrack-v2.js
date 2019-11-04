/**
 * 回溯：小于2时则枚举开头，2个以上则检测下一项
 */
const MAX = Math.pow(2, 31) - 1

var splitIntoFibonacci = function(S) {
  let res = []
    
  function backtrack (from, acc) {
    if (from === S.length) {
      if (acc.length >= 3 && acc.every(item => item <= MAX)) {
        res = acc
        return true
      }
      return false
    }
    
    if (acc.length < 2) { // 枚举
      if (S[from] === '0') {
        if (backtrack(from + 1, acc.concat(0))) return true
      } else {
        let n = 0
        for (let i = from; i < S.length; ++i) {
          n = n * 10 + Number(S[i])
          if (backtrack(i + 1, acc.concat(n))) return true
        }
      }
    } else { // 检测
      const next = String(acc[acc.length - 1] + acc[acc.length - 2])
      let prefix = S.slice(from, from + next.length)
      if (prefix === next) {
        if (backtrack(from + next.length, acc.concat(Number(next)))) return true
      }
    }

    return false
  }
  
  backtrack(0, [])
  return res
};