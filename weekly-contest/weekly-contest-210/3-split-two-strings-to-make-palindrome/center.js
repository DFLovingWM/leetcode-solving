/**
 * 中心扩展
 */
var checkPalindromeFormation = function(a, b) {
  const n = a.length;
  let left = (n & 1) ? (n >>> 1) : (n >>> 1) - 1;
  // 先(贪心)单独扩展
  left = Math.min(expand(a, a, left), expand(b, b, left));
  // 再看组合
  left = Math.min(expand(a, b, left), expand(b, a, left))
  // 看最后能否完全扩展
  return left === -1;
};

// 这里只需要`left`参数，因为`right`与它关于中心对称
function expand(A, B, left) {
  const n = A.length;
  let right = n - left - 1;
  while (left >= 0) {
    if (A[left] !== B[right]) break;
    --left;
    ++right;
  }
  return left; // 返回最终能扩展的最左位置
}

module.exports = checkPalindromeFormation;
