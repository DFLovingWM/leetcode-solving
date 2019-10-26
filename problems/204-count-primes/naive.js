/**
 * 从2遍历到N，逐个判断是否是素数
 * 时间：O(N * sqrt(N))，1212ms
 */
var countPrimes = function(n) {
  let count = 0
  for (let i = 2; i < n; ++i) {
    if (isPrime(i)) ++count
  }
  return count
};

/**
 * 判断是否是素数
 * 时间：O(sqrt(M)) 
 */
function isPrime (n) {
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) return false
  }
  return true
}

module.exports = countPrimes