/**
 * 判断：子序列 + 无多余大写字母
 * 
 * 时间：68ms
 */
var camelMatch = function (queries, pattern) {
  return queries.map(query => match(query, pattern))
};

function match (query, pattern) {
  let j = 0
  for (let i = 0; i < query.length; ++i) {
    if (isUpperLetter(query[i])) { // 如果是大写字母
      if (j < pattern.length && query[i] === pattern[j]) { // 如果能匹配上，就没事
        ++j
      } else { // 否则，就是多余的 => 失败
        return false
      }
    } else {
      if (j < pattern.length && query[i] === pattern[j]) {
        ++j
      }
    }
  }
  return j === pattern.length
}

function isUpperLetter (letter) {
  const c = letter.charCodeAt(0)
  return c >= 'A'.charCodeAt(0) && c <= 'Z'.charCodeAt(0)
}

module.exports = camelMatch