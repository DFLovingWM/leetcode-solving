/**
 * 二分查找
 * 
 * 时间：O(NlogN), 80ms
 */
var hIndex = function(citations) {
  // 排序
  citations.sort((a, b) => a - b);
  // N次二分查找
  const n = citations.length;
  for (let i = n; i >= 0; --i) { // H指数范围：[0, n]，遂逐一尝试
    const index = ge(citations, i);
    const over = index === -1 ? 0 : n - index;
    if (over >= i) {
      return i;
    }
  }
  return 0;
};

function bisectLeft(arr, target) {
  let [left, right] = [0, arr.length];
  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (target <= arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function ge(arr, target) {
  const i = bisectLeft(arr, target);
  return i < arr.length ? i : -1;
}

[
  [],
  [0],
  [100],
  [3,0,6,1,5],
  [6,5,3,1,0],
  [1,1],
].forEach(A => {
  console.log(hIndex(A))
})