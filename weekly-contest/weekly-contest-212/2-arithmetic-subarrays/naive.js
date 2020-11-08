/**
 * 暴力
 * 
 * 时间：O(N^2 * logN)
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  const m = l.length;
  const res = [];
  for (let i = 0; i < m; ++i) {
    const arr = [];
    for (let j = l[i]; j <= r[i]; ++j) {
      arr.push(nums[j]);
    }
    res.push(check(arr));
  }
  return res;
};

// O(NlogN)
function check(arr) {
  const n = arr.length;
  if (n <= 2) {
    return true;
  }
  arr.sort((a, b) => a - b);
  const d = arr[1] - arr[0];
  for (let i = 1; i < n; ++i) {
    if (arr[i] - arr[i - 1] !== d) {
      return false;
    }
  }
  return true;
}