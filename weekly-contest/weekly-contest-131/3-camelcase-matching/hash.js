/**
 * 哈希表（频次）。true的条件：
 * 1. pattern是query的子序列
 * 2. 两者的大写字母一样
 * 
 * 时间：72ms
 */
var camelMatch = function (queries, pattern) {
  const P = count(pattern)
  return queries.map(query => {
    const Q = count(query)
    return isSubSequence(pattern, query) && checkUpperCase(Q, P)
  })
};

// 判断子序列
function isSubSequence (pattern, query) {
  let j = 0
  for (let i = 0; i < query.length && j < pattern.length; ++i) {
    if (pattern[j] === query[i]) {
      ++j
    }
  }
  return j === pattern.length
}

// 检查大写字母是否相等
function checkUpperCase (query, pattern) {
  const A = 'A'.charCodeAt(0)
  const Z = 'Z'.charCodeAt(0)
  for (let i = A; i <= Z; ++i) {
    const ch = String.fromCharCode(i)
    if ((query.get(ch) || 0) !== (pattern.get(ch) || 0)) {
      return false
    }
  }
  return true
}

// 计算一个单词中的字母频次
function count (word) {
  const res = new Map()
  for (const ch of word) {
    res.set(ch, (res.get(ch) || 0) + 1)
  }
  return res
}

module.exports = camelMatch