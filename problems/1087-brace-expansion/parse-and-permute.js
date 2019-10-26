/**
 * 字符串解析 + 全排列
 */
var expand = function(str) {
  const charsList = []
  let s = ''
  let hasBracket = false

  for (let i = 0; i < str.length; ++i) {
    const ch = str[i]

    if (ch === '{') {
      hasBracket = true
    } else if (ch === '}') {
      charsList.push(s.split(','))
      hasBracket = false
      s = ''
    } else if (isLetter(ch) && !hasBracket) {
      charsList.push([ch])
    } else {
      s += ch
    }
  }
  if (s) charsList.push(s.split(','))

  const res = []
  dfs(charsList, 0, '', res)
  return res.sort((a, b) => a < b ? -1 : a === b ? 0 : 1) // 字典升序
};

function dfs (charsList, i, acc, res) {
  if (i === charsList.length) {
    res.push(acc)
    return
  }

  for (const ch of charsList[i]) {
    dfs(charsList, i + 1, acc + ch, res)
  }
}

function isLetter (ch) {
  return /^[a-zA-Z]$/.test(ch)
}

[
  '{a,b}c{d,e}f',
  'abcd',
  '{a,b}cd',
  "{a,b}{z,x,y}"
].forEach(s => {
  console.log(expand(s))
})