/**
 * 递归 + 记忆化
 * 
 * 时间：2228ms
 */
var isMatch = function (text, pattern, cache = new Map()) {
  const key = getKey(text, pattern)
  if (cache.has(key)) return cache.get(key)

  if (!pattern) return !text

  let res
  if (pattern[0] !== '*') { // 简单情况
    res = !!text && (pattern[0] === '?' || pattern[0] === text[0]) && isMatch(text.slice(1), pattern.slice(1), cache)
  } else { // 存在'*'，匹配0或1个长度
    res = isMatch(text, pattern.slice(1), cache) ||
      !!text && isMatch(text.slice(1), pattern, cache)
  }
  cache.set(key, res)
  return res
};

function getKey (T, P) {
  return `${T},${P}`
}

module.exports = isMatch