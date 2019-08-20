/**
 * DP
 * 
 * 参考Lee解法：
 * https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/discuss/278251/JavaC%2B%2BPython-Solution
 * 
 * - O(N), 60ms
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  let { length } = A
  let S = Array.from({ length }, () => 0)

  // 求前缀和数组 Sn
  S[0] = A[0]
  for (let i = 1; i < A.length; ++i) {
    S[i] = S[i - 1] + A[i]
  }

  // DP
  let Lmax = S[L - 1], Mmax = S[M - 1]
  let result = S[L + M - 1]
  for (let i = L + M; i < length; ++i) {
    let l = i - M // L段的新结尾
    Lmax = Math.max(Lmax, S[l] - S[l - L]) // 取更长的L段

    let m = i - L
    Mmax = Math.max(Mmax, S[m] - S[m - M])

    result = Math.max(
      result,
      Lmax + (S[i] - S[i - M]), // 因为前面的初始化部分保证了L、M两条线段不会重合，所以可以直接相加
      Mmax + (S[i] - S[i - L])
    )
  }

  return result
};

[
  [[0,6,5,2,2,5,1,9,4], 1, 2],
  [[3,8,1,3,2,1,8,9,0], 3, 2],
  [[2,1,5,6,0,9,5,0,3,8], 4, 3],
].forEach(input => {
  console.log(maxSumTwoNoOverlap(...input))
})
