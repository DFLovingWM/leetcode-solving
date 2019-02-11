/**
 * My DFS，which causes a MLE...
 * 
 * T(N2)
 */
var subarraysDivByK = function (arr, K) {
  let result = 0
  let mark = {}

  const getKey = (left, right) => `${left},${right}`
  
  function dfs (left, right, sum) {
    const key = getKey(left, right)

    if (right - left === 0 || mark[key]) { // Return when encountering empty array or visited
      return
    }

    mark[key] = true
    if (sum % K === 0) {
      ++result
    }
    dfs(left, right - 1, sum - arr[right - 1])
    dfs(left + 1, right, sum - arr[left])
  }

  let sum = arr.reduce((acc, item) => acc + item)
  dfs(0, arr.length, sum)

  return result
}

module.exports = subarraysDivByK