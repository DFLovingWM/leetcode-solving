/**
 * 递归法[68ms]
 */
function generateParenthesis (n) {
  const results = []

  const recursive = (result = '') => {
    if (n * 2 === result.length) { // 叶子结点
      results.push(result)
      return
    }

    let leftCount = [...result].filter(i => i === '(').length,
        rightCount = result.length - leftCount
    if (leftCount === rightCount) { // 如果相等，只能添加左括号
      recursive(result + '(')
    } else { // 如果左括号多一点
      if (leftCount < n) { // 如果还能添加左括号
        recursive(result + '(')
      }
      recursive(result + ')')
    }
  }

  recursive()
  return results
}

/**
 * 优化的递归：每一层多传一些参数，去掉遍历
 * [52ms]
 */
function generateParenthesis (n) {
  const results = []

  const recursive = (leftCount = 0, rightCount = 0, result = '') => {
    if (n * 2 === result.length) { // 叶子结点
      results.push(result)
      return
    }

    if (leftCount === rightCount) { // 如果相等，只能添加左括号
      recursive(leftCount + 1, rightCount, result + '(')
    } else { // 如果左括号多一点
      if (leftCount < n) { // 如果还能添加左括号
        recursive(leftCount + 1, rightCount, result + '(')
      }
      recursive(leftCount, rightCount + 1, result + ')')
    }
  }

  recursive()

  return results
}

module.exports = generateParenthesis