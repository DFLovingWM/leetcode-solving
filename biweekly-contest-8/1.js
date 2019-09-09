/**
 * 求S
 */
var countLetters = function(text) {
  let res = 0

  let count = 1
  for (let i = 1; i < text.length; ++i) {
    if (text[i] === text[i - 1]) {
      ++count
    } else {
      res += S(count)
      count = 1
    }
  }
  // 最后一个
  res += S(count)

  return res
};

function S (n) {
  return n * (n + 1) / 2
}

[
  'aaaba',
  'aaaaaaaaaa'
].forEach(s => {
  console.log(countLetters(s))
})