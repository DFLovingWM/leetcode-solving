/**
 * 暴力模拟即可
 */
var countAndSay = function(n) {
  let res = '1'
  for (let i = 1; i < n; ++i) {
    res = read(res)
  }
  return res
};

// 读
function read (text) {
  let res = ''
  let count = 1
  for (let i = 1; i < text.length; ++i) {
    if (text[i] === text[i - 1]) {
      ++count
    } else {
      res += '' + count + text[i - 1]
      count = 1
    }
  }
  // 别忘了最后的
  res += '' + count + text[text.length - 1]
  return res
}

[1,2,3,4,5,30].forEach(n => {
  console.log(countAndSay(n))
})