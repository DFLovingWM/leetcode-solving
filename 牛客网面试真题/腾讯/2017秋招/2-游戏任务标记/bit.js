/**
 * 很无语的一道题：直接判断就行了，但题目是想考察用`unsigned int[32]`以及位操作
 */
const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  // input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  input: process.stdin,
  output: process.stdout,
})

r.on('line', (line) => {
  const [id1, id2] = line.split(' ').map(Number)
  console.log(solve(id1, id2))
})

function solve (id1, id2) {
  if (!(id1 >= 0 && id1 <= 1024 && id2 >= 0 && id2 <= 1024)) return -1
  
  const bits = new Array(32).fill(0)
  --id1
  --id2

  bits[Math.floor(id1 / 32)] |= 1 << (id1 % 32)
  return bits[Math.floor(id2 / 32)] & (1 << (id2 % 32)) ? 1 : 0
}