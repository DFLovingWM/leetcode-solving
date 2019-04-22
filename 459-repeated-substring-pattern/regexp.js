/**
 * This solution refers to: https://leetcode.com/problems/repeated-substring-pattern/discuss/94448/One-line-with-RegEx
 * - Time: 112ms
 * - Space: 36.4MB
 */
function repeatedSubstringPattern (str) {
  return /^(\w+)(\1)+$/.test(str)
}