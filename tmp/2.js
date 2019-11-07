/**
 * Top-down DP
 */
function isMatch (text, pattern, cache = new Map()) {
  if (!pattern) return !text

  const key = getKey(text, pattern)
  if (cache.has(key)) return cache.get(key)

  let res

  // 对pattern[0]分类讨论
  if (pattern[0] === '*') {
    res = isMatch(text, pattern.slice(1), cache) || // 匹配0个
      !!text && isMatch(text.slice(1), pattern, cache) // 匹配1个
  } else {
    // 首字符匹配
    const firstMatch = !!text && (text[0] === pattern[0] || pattern[0] === '?')
    res = firstMatch && isMatch(text.slice(1), pattern.slice(1), cache)
  }

  cache.set(key, res)
  return res
}

function getKey (t, p) {
  return `${t},${p}`
}

console.log(isMatch("aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba",
"a*******b"))