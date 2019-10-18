/**
 * 贪心：线性遍历即可
 */
var balancedStringSplit = function (s) {
  let res = 0
  let count = 0
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === 'R') ++count
    else --count
    if (count === 0) ++res
  }
  return res
};