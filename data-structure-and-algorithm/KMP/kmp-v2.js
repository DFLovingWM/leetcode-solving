/**
 * KMP讲解视频：https://www.youtube.com/watch?v=GTJr8OvyEVQ
 */

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

  let T = 0, P = 0
  while (T < text.length && P < pattern.length) {
    if (text[T] === pattern[P]) {
      ++T
      ++P
    } else {
      if (P >= 1) {
        P = next[P - 1]
      } else {
        ++T
      }
    }
  }

  if (P === pattern.length) { // If matched entirely, return the [from] index
    return T - pattern.length
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
  let next = Array.from({ length: pattern.length })
  next[0] = 0

  let L = 0, R = 1
  while (R < pattern.length) {
    if (pattern[L] === pattern[R]) {
      next[R++] = ++L
    } else {
      if (L >= 1) {
        L = next[L - 1]
      } else {
        next[R++] = 0
      }
    }
  }

  return next
}

module.exports = indexOf