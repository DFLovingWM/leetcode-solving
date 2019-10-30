/**
 * 考察：二分查找（非标准）
 * （@todo 至今仍不知道错在哪）
 */
const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  // input: process.stdin,
  output: process.stdout,
})

r.on('line', n => {
  console.log(solve(Number(n)))
})

function solve (x) {
  let res = ''
  let [left, right] = [-90, 90]

  while (res.length < 6) {
    const mid = (left + right) / 2

    if (x >= mid) { // 往右走
      res += '1'
      left = mid
    } else { // 往左走
      res += '0'
      right = mid
    }
  }

  return res
}