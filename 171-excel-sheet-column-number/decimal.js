/**
 * 26进制
 */
const BASE = 26

var titleToNumber = function (s) {
  let res = 0
  for (let i = 0; i < s.length; ++i) {
    res = res * BASE + char2Num(s[i])
  }
  return res
};

// 大写字母转数字（A=1，Z=26）
function char2Num (char) {
  return char.charCodeAt(0) - 'A'.charCodeAt(0) + 1
}

[
  'A', 'AB', 'ZY'
].forEach(s => {
  console.log(titleToNumber(s))
})