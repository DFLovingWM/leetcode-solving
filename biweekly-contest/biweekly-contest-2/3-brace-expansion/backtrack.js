/**
 * 解析字符串 + 回溯
 */
var expand = function (S) {
  const wordList = parseWords(S)
  const res = []

  function backtrack (i, acc) {
    if (i === wordList.length) {
      res.push(acc)
      return
    }
    
    for (const word of wordList[i]) {
      backtrack(i + 1, acc + word)
    }
  }

  backtrack(0, '')
  return res
};

function parseWords (S) {
  const re = /\{([\w\,]+)\}|(\w+)/g // 花括号中的、花括号外的
  const words = []

  while (true) {
    const r = re.exec(S)
    if (!r) break
    
    if (r[1]) { // 花括号内
      words.push(r[1].split(',').sort()) // 提前排序，使最终结果满足字典序
    } else if (r[2]) { // 花括号外
      words.push([r[2]])
    }
  }

  return words
}

[
  "{a,b}c{d,e}f",
  "abcd",
  "{a,b}{z,x,y}",
].forEach(s => {
  const r = expand(s)
  console.log(r)
})