/**
 * 二分查找
 * 时间：O(NlogN)
 */
var breakfastNumber = function(staples, drinks, x) {
  const MOD = 1e9 + 7;
  drinks.sort((a, b) => a - b);
  let res = 0;
  for (const s of staples) {
    const i = findLessOrEqual(drinks, x - s);
    res += i + 1;
    res %= MOD;
  }
  return res;
};

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

function findLessOrEqual (arr, x) {
  const i = bisectRight(arr, x)
  if (i - 1 >= 0) return i - 1
  return -1
}