/**
 * Prefix-sum method
 * 
 * T(N)
 * S(N)
 */
function subarraysDivByK (arr, K) {
  let prefixSum = [0]
  for (let i = 1; i <= arr.length; ++i) {
    prefixSum[i] = prefixSum[i - 1] + arr[i - 1]
  }

  let count = Array.from({ length: K }, _ => 0)
  for (let i = 0; i <= arr.length; ++i) {
    let mod = (prefixSum[i] % K + K) % K // Can't simply mod K because prefixSum[i] can be nagative.
    ++count[mod]
  }

  let result = 0
  for (let i = 0; i < K; ++i) {
    if (count[i] > 0) {
      result += count[i] * (count[i] - 1) / 2
    }
  }

  return result
}

module.exports = subarraysDivByK