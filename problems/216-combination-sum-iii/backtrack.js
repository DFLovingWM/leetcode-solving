/**
 * K-sum问题
 */
var combinationSum3 = function(K, targetSum) {
  if (K === 1) {
    if (targetSum >= 1 && targetSum <= 9) return [[targetSum]]
    return []
  }
  
  const res = []
    
  function backtrack (k, sum, acc) {
    const from = acc.length > 0 ? acc[acc.length - 1] + 1 : 1
    if (from * k > sum || 9 * k < sum) return // 剪枝

    if (k === 2) {
      const exist = new Set()
      for (let i = from; i <= 9; ++i) {
        if (exist.has(sum - i)) {
          res.push([...acc, sum - i, i])
        }
        exist.add(i)
      }
      return
    }
    
    for (let i = from; i <= 9; ++i) {
      backtrack(k - 1, sum - i, acc.concat(i))
    }
  }
  
  backtrack(K, targetSum, [])
  return res
};

module.exports = combinationSum3