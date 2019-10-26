/**
 * 参考：https://leetcode-cn.com/problems/power-of-two/solution/power-of-two-er-jin-zhi-ji-jian-by-jyd/
 * 
 * 时间复杂度：O(1)，耗时96ms
 */
function isPowerOfTwo (n) {
  if (n <= 0) return false
  return (n & (n - 1)) === 0
}

// [1,2,3,4,5,6,7,8].forEach(n => console.log(isPowerOfTwo(n)))