/**
 * 预处理成前缀频次
 * 
 * 时间：`O(L + 26N)`, 1864ms
 * 空间：`O(26L)`, 290.5MB
 */
var canMakePaliQueries = function (text, queries) {
  const acc = new Map()
  const prefix = [new Map(acc)]
  for (const ch of text) {
    acc.set(ch, (acc.get(ch) || 0) + 1)
    prefix.push(new Map(acc))
  }

  return queries.map(([from, to, maxChange]) => {
    ++to
    const freq = subtract(prefix[to], prefix[from])
    let need = 0
    for (const cnt of freq.values()) {
      need += cnt % 2
    }
    return Math.floor(need / 2) <= maxChange
  })
};

// Map频次相减
function subtract (A, B) {
  A = new Map(A)
  for (const ch of B.keys()) {
    A.set(ch, A.get(ch) - B.get(ch))
    if (A.get(ch) === 0) A.delete(ch)
  }
  return A
}

module.exports = canMakePaliQueries