/**
 * 不断排序
 */
var lastSubstring = function (S) {
  let chars = S.split('').map((ch, i) => [i, ch])

  for (let i = 0; true; ++i) {
    // 排序
    chars.sort((A, B) => {
      if (A[1] > B[1]) return -1
      else if (A[1] < B[1]) return 1
      return 0
    })

    // 只保留最大字符
    let j = 0
    while (j < chars.length && chars[j][1] === chars[0][1]) ++j
    chars = chars.slice(0, j)
    if (chars.length === 1) {
      return S.slice(chars[0][0] - i)
    }

    // 下一个字符
    chars = chars.map(([index, char]) => [index + 1, index + 1 === S.length ? '' : S[index + 1]])
  }
};

module.exports = lastSubstring