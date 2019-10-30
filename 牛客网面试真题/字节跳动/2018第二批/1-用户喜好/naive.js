const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  // input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  input: process.stdin,
  output: process.stdout,
})

let lineNum = -1
let likes

r.on('line', (line) => {
  ++lineNum
  if (lineNum === 1) {
    likes = line.split(' ')
  } else if (lineNum >= 3) {
    const query = line.split(' ')
    console.log(solve(likes, query))
  }
})

function solve (likes, query) {
  let res = 0
  let [from, to, target] = query
  --from
  --to
  for (let i = from; i <= to; ++i) {
    if (likes[i] === target) {
      ++res
    }
  }
  return res
}