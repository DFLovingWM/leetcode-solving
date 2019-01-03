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
 * 递推(for循环的设计)[52ms]
 */
function letterCombinations (digits) {
  digits = Array.from(digits).filter(item => !'01'.includes(item)) // 除去0、1
  if (digits.length === 0) return []

  let results = ['']
  for (const digit of digits) {
    let newResults = []
    for (const result of results) {
      for (const char of MAPPING[digit]) {
        newResults.push(result + char)
      }
    }
    results = newResults
  }

  return results
}

module.exports = letterCombinations