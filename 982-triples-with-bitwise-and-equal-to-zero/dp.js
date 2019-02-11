/**
 * DP：dp(length, result)
 * dp(i, j)表示i个数字进行&运算得到结果j的数量，则状态转移方程为：
 * dp(i, j & n) += dp(i-1, j)
 * 
 * 时间复杂度：O(N*M)，其中M为数字范围，即2^16，有点大所以实际耗时较多
 * [14760ms]
 */
function countTriplets (arr, range = 1 << 16) {
  let dp = Array.from({ length: 3 + 1 }, () => {
    return new SafeMap(0)
  })

  // 初始化
  for (const n of arr) {
    dp[1].set(n, dp[1].get(n) + 1)
  }

  // 开始DP
  for (let len = 2; len <= 3; ++len) { // 2
    for (let tmp = 0; tmp <= range; ++tmp) { // 2 ^ 16
      for (let n of arr) { // N
        dp[len].set(tmp & n, dp[len].get(tmp & n) + dp[len - 1].get(tmp))
      }
    }
  }

  // console.log(dp[3])

  return dp[3].get(0)
}

class SafeMap {
  constructor (defaultVal) {
    this.map = new Map()
    this.defaultVal = defaultVal
  }

  get (key) {
    if (!this.map.has(key)) {
      return this.defaultVal // 不存在时，返回默认值
    }
    return this.map.get(key)
  }

  set (key, value) {
    return this.map.set(key, value)
  }
}

module.exports = countTriplets