/**
 * 考察进制：25进制 => 10进制，但是需要考虑特殊情况
 */
const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  // input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  input: process.stdin,
  output: process.stdout,
})

r.on('line', code => {
  console.log(calcIndex(code))
})

function m (a, b) {
  return Math.pow(a, b)
}

/**
 * 根据code，反推其在字典序中的位置
 */
function calcIndex (code) {
  const base = [
    m(25, 3) + m(25, 2) + m(25, 1) + 1,
    m(25, 2) + m(25, 1) + 1,
    m(25, 1) + 1,
    1
  ]

  let res = 0
  let i = 0
  for (; i < code.length; ++i) {
    const n = code[i].charCodeAt(0) - 'a'.charCodeAt(0)
    res += n * base[i]

    if (i > 0) ++res // 后3为为空的情况，需要加1
  }
  return res
}