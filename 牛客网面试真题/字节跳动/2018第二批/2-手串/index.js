const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  // input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  input: process.stdin,
  output: process.stdout,
})

let lineNum = -1
let n, K, c
const color2Index = new Map()

r.on('line', (line) => {
  ++lineNum
  if (lineNum === 0) {
    let words = line.split(' ')
    n = Number(words[0])
    K = Number(words[1])
    c = Number(words[2])
  } else {
    const [numOfColors, ...colors] = line.split(' ')
    for (let color of colors) {
      color = Number(color)
      if (!color2Index.has(color)) color2Index.set(color, [])
      color2Index.get(color).push(lineNum - 1)
    }
    if (lineNum === n) {
      console.log(solve())
    }
  }
})

function solve () {
  let invalidCount = 0

  for (let i = 1; i <= c; ++i) { // 检查每种颜色
    if (!color2Index.has(i)) continue

    let minDist = Infinity
    const indexes = color2Index.get(i)
    const len = indexes.length
    for (let j = 1; j < len; ++j) {
      minDist = Math.min(minDist, indexes[j] - indexes[j - 1])
    }
    if (len > 1) minDist = Math.min(minDist, indexes[0] + n - indexes[len - 1])
    if (minDist < K) ++invalidCount
  }

  return invalidCount
}