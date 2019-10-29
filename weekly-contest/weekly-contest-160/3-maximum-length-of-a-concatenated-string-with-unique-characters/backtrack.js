/**
 * 回溯
 * 
 * 时间：88ms
 */
var maxLength = function (words) {
  const arr = []
  for (const word of words) {
    const chars = new Set()
    for (const ch of word) {
      chars.add(ch)
    }
    if (chars.size === word.length) {
      arr.push(chars)
    }
  }

  let res = 0

  function backtrack(start, used, len) {
    res = Math.max(res, len)

    for (let i = start; i < arr.length; ++i) {
      if (canCombine(used, arr[i])) {
        for (const ch of arr[i]) used.add(ch)
        backtrack(i + 1, used, used.size)
        for (const ch of arr[i]) used.delete(ch)
      }
    }
  }

  backtrack(0, new Set(), 0)
  return res
};

function canCombine (A, B) {
  for (const ch of A) {
    if (B.has(ch)) return false
  }
  return true
}

module.exports = maxLength