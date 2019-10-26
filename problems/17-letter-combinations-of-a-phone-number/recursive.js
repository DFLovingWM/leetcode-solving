const MAPPING = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

/**
 * 递归[52ms]
 */
function letterCombinations (digits) {
  digits = Array.from(digits).filter(item => item !== '1') // 除去1
  if (digits.length === 0) return []

  const results = []
  recursive(digits, results)
  return results
}

function recursive (remainDigits, results, result = '') {
  if (remainDigits.length === 1) { // 叶子结点
    for (const char of MAPPING[remainDigits[0]]) {
      results.push(result + char) // 加入结果集
    }
  } else {
    for (const char of MAPPING[remainDigits[0]]) {
      recursive(remainDigits.slice(1), results, result + char)
    }
  }
}

module.exports = letterCombinations