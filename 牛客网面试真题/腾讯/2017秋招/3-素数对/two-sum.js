/**
 * 考察简单版的Two Sum：用埃氏筛法筛素数，就相当于构建了HashMap，在这基础上进行Two Sum
 */
const readline = require('readline');
const fs = require('fs');
const r = readline.createInterface({
  // input: fs.createReadStream('./in.txt'),
  // output: fs.createReadStream('./out.txt'),
  input: process.stdin,
  output: process.stdout,
})

r.on('line', sum => {
  console.log(twoSum(Number(sum)))
})

function twoSum (sum) {
  // 埃氏筛素数
  const prime = new Array(sum).fill(true)
  prime[0] = prime[1] = false
  for (let i = 2; i < sum; ++i) {
    if (prime[i]) {
      for (let j = i + i; j < sum; j += i) {
        prime[j] = false
      }
    }
  }

  let res = 0
  for (let i = 2; i * 2 <= sum; ++i) {
    if (prime[i] && prime[sum - i]) {
      ++res
    }
  }
  return res
}