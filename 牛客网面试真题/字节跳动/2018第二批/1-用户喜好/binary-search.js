const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  // input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  input: process.stdin,
  output: process.stdout,
})

let lineNum = -1
let like2Index = new Map()

r.on('line', (line) => {
  ++lineNum
  if (lineNum === 1) {
    for (const [i, like] of line.split(' ').entries()) {
      if (!like2Index.has(like)) {
        like2Index.set(like, [])
      }
      like2Index.get(like).push(i)
    }
  } else if (lineNum >= 3) {
    const query = line.split(' ')
    const result = solve(query)
    console.log(result)
  }
})

function solve (query) {
  let [from, to, target] = query
  --from
  --to
  const arr = like2Index.get(target) || []
  return bisectRight(arr, 0, arr.length, to) - bisectLeft(arr, 0, arr.length, from)
}

function bisectLeft (arr, left, right, target) {
  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (target <= arr[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

function bisectRight (arr, left, right, target) {
  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (target < arr[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
