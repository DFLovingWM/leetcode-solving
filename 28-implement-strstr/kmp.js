function strStr (text, pattern) {
  return indexOf(text, pattern)
}

/**
 * 返回模式串在主串中的首次出现的位置
 * 
 * - Time: O(T + P)
 * - Space: O(P)
 * 
 * @param {String} text 主串
 * @param {String} pattern 模式串
 * @returns {Number} 匹配则返回下标，否则返回-1（同Array.prototype.indexOf/String.prototype.indexOf）
 */
function indexOf (text, pattern) {
  const next = getNext(pattern)

  let P, T
  for (T = 0, P = 0; T < text.length && P < pattern.length; ++T) {
    while (P >= 1 && text[T] !== pattern[P]) {
      P = next[P - 1]
    }
    
    if (text[T] === pattern[P]) ++P
  }

  if (P === pattern.length) { // If matched entirely, return the [from] index
    return P - pattern.length
  } else { // Or return -1
    return -1
  }
}

/**
 * 获取模式串的next数组，耗时为O(N)
 * @param {String} pattern 模式串
 * @returns {Array<Number>} next数组，每一位表示匹配不上时，下一次匹配的位置
 */
function getNext (pattern) {
  let next = [0]

  for (let L = 0, R = 1; R < pattern.length; ++R) {
    while (L > 0 && pattern[L] !== pattern[R]) {
      L = next[L - 1]
    }

    if (pattern[L] === pattern[R]) {
      next.push(++L)
    } else {
      next.push(0)
    }
  }

  return next
}

// module.exports = indexOf