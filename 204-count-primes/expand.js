/**
 * 厄拉多塞筛法：素数的N倍（N >= 2）为非素数
 * 时间：O(N^2), 464ms
 */
var countPrimes = function(n) {
  const isPrime = calcPrimes(n)
  let count = 0
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) ++count
  }
  return count
}

function calcPrimes (n) {
  const prime = Array.from({ length: n }, () => true) // 开始时，全部当作素数
  for (let i = 2; i < n; ++i) {
    if (prime[i]) { // 如果该位置是素数（没有被推算过）
      for (let j = i + i; j < n; j += i) {
        prime[j] = false
      }
    }
  }
  return prime
}

module.exports = countPrimes