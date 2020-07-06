/**
 * 二分枚举
 * 
 * 时间：O(NlogX), 132ms
 */
var minDays = function(arr, m, k) {
  // 不可能的情况
  if (m * k > arr.length) return -1;

  // 明确二分范围
  let min = Infinity;
  let max = -Infinity;
  for (const n of arr) {
    min = Math.min(min, n);
    max = Math.max(max, n);
  }

  // 开始二分
  let [left, right] = [min, max];
  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (check(arr, mid, m, k)) { // 可行，则尝试找更小的`mid`(更优解)
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

// 检查答案`mid`
// O(N)
function check(arr, mid, M, K) {
  // 贪心：检查在每一堆的最大值都不超过`mid`的条件下，堆数是否能达到`M`
  let m = 0; // 已积累多少堆
  let k = 0; // 当前堆的元素数
  for (const num of arr) {
    if (num <= mid) { // 元素合法
      ++k;
      if (k === K) { // 凑成一堆了
        ++m;
        k = 0;
      }
    } else { // 元素不合法，即出现断层，需要清空当前堆
      k = 0;
    }
  }
  return m >= M;
}

module.exports = minDays;
