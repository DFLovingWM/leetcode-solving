/**
 * 递归（未优化）
 * 
 * 时间：148ms
 */
var isMatch = function (text, pattern) {
  if (!pattern) {
    // 如果pattern空了，那么text也必须为空，才能匹配
    return !text
  }

  const firstMatch = text && (pattern[0] === text[0] || pattern[0] === '.') // 首字符是否匹配

  if (pattern.length >= 2 && pattern[1] === '*') {
    // 当前存在'*'，则有2种选择（要么匹配0个，要么匹配1个）
    return isMatch(text, pattern.slice(2)) ||
      (firstMatch && isMatch(text.slice(1), pattern))
  } else {
    // 当前没有'*'，则简单递归
    return firstMatch && isMatch(text.slice(1), pattern.slice(1))
  }
};

module.exports = isMatch