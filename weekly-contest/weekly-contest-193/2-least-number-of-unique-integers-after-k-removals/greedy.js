/**
 * 贪心：从最小频次开始删除
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  const freq = new Map();
  for (const n of arr) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }
  
  const nums = [...freq.entries()].sort((A, B) => {
    return A[1] - B[1];
  });

  let res = freq.size;
  for (let i = 0; i < freq.size; ++i) {
    k -= nums[i][1];
    if (k >= 0) {
      --res;
    } else {
      break;
    }
  }
  return res;
};