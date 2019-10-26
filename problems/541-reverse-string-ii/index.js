/**
 * 理解：此K个字符逆转，下K个字符正常，如此循环
 * 时间复杂度：O(N)
 */
var reverseStr = function(text, K) {
  let res = ''
  let i = 0
  let needReverse = true
  while (i < text.length) {
    const segment = text.slice(i, i + K)
    res += needReverse ? reverse(segment) : segment
    needReverse = !needReverse
    i += K
  }
  return res
};

// O(N)
function reverse (str) {
  let res = ''
  for (let i = str.length - 1; i >= 0; --i) {
    res += str[i]
  }
  return res
}

// [
//   ['abcdefg', 2],
//   ["dywvznukupgstvkflnahmvatrtwputeyefwgnbbltuffnsmbbeduuxqqbtodfwnxasvxtmxfrprocghcuznqhacoxyniltwsjvrd", 86],
// ].forEach(input => {
//   console.log(reverseStr(...input))
// })