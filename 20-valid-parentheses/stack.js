const HUSBAND = {
  ')': '(',
  '}': '{',
  ']': '['
}

const WIFES = Object.keys(HUSBAND)

/**
 * 栈[52ms]
 */
function isValid (string) {
  let stack = []
  for (const char of string) {
    if (!WIFES.includes(char)) {
      stack.push(char)
    } else {
      let tail = stack.pop()
      if (tail !== HUSBAND[char]) { // 不匹配，返回false
        return false
      }
    }
  }
  return stack.length === 0
}

module.exports = isValid