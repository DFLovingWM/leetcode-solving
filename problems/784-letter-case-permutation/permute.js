/**
 * 全排列：字母有2个子结点，数字只有1个子结点
 */
var letterCasePermutation = function(S) {
  const res = []
  dfs(S, 0, '', res)
  return res
};

function dfs (S, i, acc, res) {
  if (i === S.length) {
    res.push(acc)
    return
  }

  dfs(S, i + 1, acc + S[i], res)
  if (isLetter(S[i])) { // 如果是字母，还能反转一下，多一种选择
    dfs(S, i + 1, acc + flip(S[i]), res)
  }
}

function isLetter (ch) {
  return /^[a-zA-Z]$/.test(ch)
}

function flip (letter) {
  if (/^[a-z]$/.test(letter)) return letter.toUpperCase()
  return letter.toLowerCase()
}

[
  'a1b2',
  '3z4',
  '12345'
].forEach(s => {
  console.log(letterCasePermutation(s))
})