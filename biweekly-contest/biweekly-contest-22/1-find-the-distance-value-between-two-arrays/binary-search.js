/**
 * 二分查找
 * 
 * 时间：O(NlogN), 76ms
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  arr2.sort((a, b) => a - b); // 对arr2排序（使用二分的前提）

  let res = arr1.length;

  for (let i = 0; i < arr1.length; ++i) {
    const target = arr1[i];

    // 左相邻
    const l = le(arr2, target);
    if (l !== -1 && target - arr2[l] <= d) {
      --res;
      continue;
    }

    // 右相邻
    const r = ge(arr2, target);
    if (arr2[r] - target <= d) --res;
  }

  return res;
};

// ========== 下面是二分实现，不用管 ==========

function bisectLeft(arr, target) {
  let left = 0;
  let right = arr.length;
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

function bisectRight(arr, target) {
  let left = 0;
  let right = arr.length;
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

// <= target
function le(arr, target) {
  const i = bisectRight(arr, target);
  return i - 1 >= 0 ? i - 1 : -1;
}

// >= target
function ge(arr, target) {
  const i = bisectLeft(arr, target);
  return i;
}