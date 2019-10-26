/**
 * 思路：O(N2)肯定会超时，所以可以让后面的基于前面的，来减少到O(N)
 * 算法：
 * - 后面的数字等于前面的数字乘以2加0/1，比如`011(3)`到`111(7)`就是：3 * 2 + 1 = 7
 * - 因为是被5整除，所以其实可以每次`N = N mod 5`，来避免N超出精度
 */
var prefixesDivBy5 = function(A) {
  let ret = []
  let n = 0
  for (const a of A) {
    n = (n * 2 + a) % 5
    ret.push(n % 5 === 0)
  }
  return ret
};