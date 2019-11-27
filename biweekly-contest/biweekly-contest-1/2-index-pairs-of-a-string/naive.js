/**
 * 数据量小，字符串暴力搜索/KMP都可
 */
var indexPairs = function (text, words) {
  const res = []

  for (const word of words) {
    let prevEnd = 0

    while (true) {
      const currStart = text.indexOf(word, prevEnd)
      if (currStart === -1) break
      res.push([currStart, currStart + word.length - 1])
      prevEnd = currStart + 1
    }
  }

  return res.sort((A, B) => A[0] - B[0] || A[1] - B[1])
};

[
  ['thestoryofleetcodeandme', ["story","fleet","leetcode"]],
  ['ababa', ["aba","ab"]],
].forEach(input => {
  console.log(indexPairs(...input))
})