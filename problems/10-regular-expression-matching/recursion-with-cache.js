/**
 * 递归 + 记忆化（即DP）
 * 
 * 时间：84ms
 */
var isMatch = function (text, pattern, cache = new Map()) {
  const key = getKey(text, pattern)
  if (cache.has(key)) return cache.get(key)

  if (!pattern) {
    // 如果pattern空了，那么text也必须为空，才能匹配
    return !text
  }

  const firstMatch = text && (pattern[0] === text[0] || pattern[0] === '.') // 首字符是否匹配
  let res
  if (pattern.length >= 2 && pattern[1] === '*') {
    // 当前存在'*'，则有2种选择（要么匹配0个，要么匹配1个）
    res = isMatch(text, pattern.slice(2), cache) ||
      (firstMatch && isMatch(text.slice(1), pattern, cache))
  } else {
    // 当前没有'*'，则简单递归
    res = firstMatch && isMatch(text.slice(1), pattern.slice(1), cache)
  }
  cache.set(key, res)
  return res
};

function getKey (text, pattern) {
  return `${text} ${pattern}`
}

module.exports = isMatch