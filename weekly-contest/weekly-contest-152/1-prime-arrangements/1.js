const MOD = Math.pow(10, 9) + 7

/**
 * 数出素数的数量
 */
var numPrimeArrangements = function(n) {
  let primeCount = 0
  for (let i = 2; i <= n; ++i) {
    if (isPrime(i)) {
      // console.log('素数：', i)
      ++primeCount
    }
  }
  let unprimeCount = n - primeCount
  
  let result = 1
  for (let i = 2; i <= primeCount; ++i) {
    result = result * i % MOD
  }
  for (let i = 2; i <= unprimeCount; ++i) {
    result = result * i % MOD
  }
  return result
};

function isPrime (n) {
  for (let i = 2, limit = Math.floor(Math.sqrt(n)) + 1; i <= limit && i < n; ++i) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

[
  5,
  100,
].forEach(n => {
  console.log(numPrimeArrangements(n))
})
