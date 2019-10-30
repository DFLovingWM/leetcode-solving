const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  // input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  input: process.stdin,
  output: process.stdout,
})

let lineNum = -1

r.on('line', (line) => {
  ++lineNum
  // ...
})