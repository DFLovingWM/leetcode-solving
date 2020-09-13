/**
 * 直接来
 * 
 * 时间：O(N)
 */
var minOperations = function(n) {
  let res = 0;
  let l = 0, r = n - 1;
  while (l < r) {
    let left = 2 * l + 1;
    let right = 2 * r + 1;
    res += (right - left) / 2;
    ++l;
    --r;
  }
  return res;
};