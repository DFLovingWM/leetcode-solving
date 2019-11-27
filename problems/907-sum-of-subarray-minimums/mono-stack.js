/**
 * 单调栈
 * 
 * 时间：`O(N)`, 172ms
 */
const MOD = Math.pow(10, 9) + 7

var sumSubarrayMins = function (A) {
  const left = findPrevSmaller(A)
  const right = findNextSmaller(A)
console.log(left, right)
  let res = 0
  for (let i = 0; i < A.length; ++i) {
    res += A[i] * (i - left[i]) * (right[i] - i) % MOD
    res %= MOD
  }
  return res
};

// 寻找右边最近的更小元素
function findNextSmaller (arr) {
  const res = Array.from({ length: arr.length }, () => arr.length)
  const mono = []
  for (let i = arr.length - 1; i >= 0; --i) {
    while (mono.length > 0 && arr[i] < arr[mono[mono.length - 1]]) {
      mono.pop()
    }
    if (mono.length > 0) res[i] = mono[mono.length - 1]
    mono.push(i)
  }
  return res
}

// 寻找左边最近的更小元素
function findPrevSmaller (arr) {
  const res = Array.from({ length: arr.length }, () => -1)
  const mono = []
  for (let i = 0; i < arr.length; ++i) {
    while (mono.length > 0 && arr[i] <= arr[mono[mono.length - 1]]) {
      mono.pop()
    }
    if (mono.length > 0) res[i] = mono[mono.length - 1]
    mono.push(i)
  }
  return res
}

module.exports = sumSubarrayMins