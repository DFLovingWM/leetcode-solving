/**
 * 递推法[80ms]
 */
function generateParenthesis (n) {
  if (n === 0) return []
  if (n === 1) return ['()']

  let results = ['']
  let loopCount = n * 2
  while (loopCount--) {
    let tmp = []
    for (const result of results) {
      let leftCount = Array.from(result).filter(e => e === '(').length,
          rightCount = result.length - leftCount
      if (leftCount === rightCount) { // 相等，下一步只能加左括号
        tmp.push(result + '(')
      } else { // 左多于右，下一步都能加
        if (leftCount < n) {
          tmp.push(result + '(')
        }
        tmp.push(result + ')')
      }
    }
    results = tmp
  }

  return results
}

module.exports = generateParenthesis