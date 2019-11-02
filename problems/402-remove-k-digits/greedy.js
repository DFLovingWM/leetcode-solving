/**
 * 贪心
 */
var removeKdigits = function (S, K) {
  if (K >= S.length) return '0'

  while (K--) {
    // 选出第一个比后面大的数字
    let i
    for (i = 0; i < S.length - 1; ++i) {
      if (S[i] > S[i + 1]) {
        break
      }
    }
    // 删掉
    S = S.slice(0, i) + S.slice(i + 1)
    // 删掉前面多余的0
    let j = 0
    while (S[j] === '0') ++j
    S = S.slice(j)
  }

  return S || '0'
};

[
  ['1432219', 3],
  ['10200', 1],
  ['10', 2],
  ["1107", 1],
  ["10",1],
].forEach(input => {
  console.log(removeKdigits(...input))
})