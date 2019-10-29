/**
 * 回溯
 */
var circularPermutation = function (n, start) {
  const LENGTH = 1 << n
  let res

  function backtrack (curr, acc, visit) {
    if (acc.length === LENGTH) {
      const tmp = acc[0] ^ acc[acc.length - 1]
      if (!(tmp & tmp - 1)) {
        res = acc
        return true
      }
      return false
    }

    let mask = 1
    for (let i = 0; i < n; ++i) {
      const next = curr ^ mask
      if (!visit.has(next)) {
        visit.add(next)
        acc.push(next)
        if (backtrack(next, acc, visit)) return true
        // 回溯
        visit.delete(next)
        acc.pop()
      }
      mask = mask << 1
    }
  }

  backtrack(start, [start], new Set([start]))
  return res
};

module.exports = circularPermutation