/**
 * K指针
 * 
 * 时间：O(N), 88ms
 */
var nthSuperUglyNumber = function (n, primes) {
  const k = primes.length
  const index = new Array(k).fill(0)
  const ugly = [1]

  for (let i = 0; i < n; ++i) {
    // 求min
    let min = Infinity
    for (let j = 0; j < k; ++j) {
      min = Math.min(min, ugly[index[j]] * primes[j])
    }

    ugly.push(min)

    // 更新步数
    for (let j = 0; j < k; ++j) {
      if (ugly[index[j]] * primes[j] === min) {
        ++index[j]
      }
    }
  }

  return ugly[n - 1]
};

module.exports = nthSuperUglyNumber