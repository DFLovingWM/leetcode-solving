/**
 * 回溯
 * 
 * 时间：`O(5 ^ logN)`, 1200ms
 */
var confusingNumberII = function (N) {
  let res = 0
  const arr = [0, 1, 6, 8, 9]

  function backtrack (n) {
    if (n > N) return
    if (isConfusingNumber(n)) {
      ++res
    }

    for (const digit of arr) {
      backtrack(n * 10 + digit)
    }
  }

  for (const start of [1, 6, 8, 9]) {
    backtrack(start)
  }
  return res
};

const ADJ = {
  '0': '0',
  '1': '1',
  '6': '9',
  '8': '8',
  '9': '6',
}

function isConfusingNumber (number) {
  const A = String(number)
  let B = ''
  for (const ch of A) {
    B = ADJ[ch] + B
  }
  return A !== B
}

[
  20,
  100,
  100000000,
].forEach(n => {
  console.log(confusingNumberII(n))
})