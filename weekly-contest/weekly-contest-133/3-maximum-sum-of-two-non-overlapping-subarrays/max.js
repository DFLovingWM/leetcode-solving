/**
 * 前缀和 + 最大和(提前求出最大的M, 遍历L)
 * 
 * 时间：`O(N)`, 72ms
 */
var maxSumTwoNoOverlap = function (arr, lLen, mLen) {
  let acc = 0
  const prefix = [acc] // 前缀和
  for (const a of arr) {
    acc += a
    prefix.push(acc)
  }
  
  const n = arr.length

  // leftMaxM[i]：表示从左到右看，终点为`i`的最大的M
  const leftMaxM = Array.from({ length: n }, () => -Infinity)
  leftMaxM[mLen - 1] = prefix[mLen] - prefix[0]
  for (let i = mLen; i < n; ++i) {
    leftMaxM[i] = Math.max(leftMaxM[i - 1], prefix[i + 1] - prefix[i + 1 - mLen])
  }
  // rightMaxM[i]：表示从右到左看，终点为`i`的最大的M
  const rightMaxM = Array.from({ length: n }, () => -Infinity)
  rightMaxM[n - mLen] = prefix[n] - prefix[n - mLen]
  for (let i = n - mLen - 1; i >= 0; --i) {
    rightMaxM[i] = Math.max(rightMaxM[i + 1], prefix[i + mLen] - prefix[i])
  }

  let res = 0
  for (let i = 0; i + lLen <= n; ++i) { // 遍历L起点
    const L = prefix[i + lLen] - prefix[i]

    let maxM = -Infinity
    // L左边的最大M
    if (i - 1 >= 0) {
      maxM = Math.max(maxM, leftMaxM[i - 1])
    }
    // L右边的最大M
    if (i + lLen < n) {
      maxM = Math.max(maxM, rightMaxM[i + lLen])
    }

    res = Math.max(res, L + maxM)
  }

  return res
};

module.exports = maxSumTwoNoOverlap