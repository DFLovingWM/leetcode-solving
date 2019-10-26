/**
 * 暴力
 * - Time: O(A+B), 72ms
 * - Space: O(A+B), 35.4MB
 */
function repeatedStringMatch (textUnit, pattern) {
  let text
  let count = 0
  for (text = ''; text.length < pattern.length; ++count) {
    text += textUnit
  }
  
  if (text.includes(pattern)) {
    return count
  } else if ((text + textUnit).includes(pattern)) {
    return count + 1
  } else {
    return -1
  }
}

module.exports = repeatedStringMatch