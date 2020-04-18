/**
 * 贪心（二分查找）
 */
var findMinFibonacciNumbers = function(k) {
  // 先求出数组（k范围内）
  const arr = [];
  let [a, b] = [1, 0];
  while (true) {
    const c = a + b;
    if (c > k) break;
    arr.push(c);
    [a, b] = [b, c];
  }

  // 贪心
  let res = 0;
  let curr = k;
  for (; curr > 0; ++res) {
    const i = le(arr, curr); // 贪心：每次都减去最大的
    curr -= arr[i];
  }
  return res;
};

// ========== 分割线：以下是二分查找实现 ==========

function bisectRight (arr, x) {
  let [left, right] = [0, arr.length]
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (x < arr[mid]) {
      right = mid
    } else { // 相等情况
      left = mid + 1
    }
  }
  return left
}

function le (arr, x) {
  const i = bisectRight(arr, x)
  if (i - 1 >= 0) return i - 1
  return -1
}

[
  7,10,19
].forEach(n => {
  console.log(findMinFibonacciNumbers(n))
})