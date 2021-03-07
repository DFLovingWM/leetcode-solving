/**
 * 548?
 */
var waysToSplit = function(nums) {
  const mod = 1e9 + 7;
  const prefix = [0];
  for (const num of nums) {
    prefix.push(prefix[prefix.length - 1] + num);
  }
  const sum = prefix[prefix.length - 1];

  const n = nums.length;
  let left = 0;
  let res = 0;
  for (let i = 0; i < n; ++i) {
    left += nums[i];
    const l = ge(prefix, left + left);
    const r = le(prefix, ((sum - left) >>> 1) + left);
    if (l >= 0 && r <= n && r >= l) {
      console.log(i, l, r);
      res += r - l + 1;
      res %= mod;
    }
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
    if (target < arr[mid]) {
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

[
  // [1,1,1],
  // [1,2,2,2,5,0],
  // [3,2,1],
  [0,3,3],
].forEach(A => {
  console.log(waysToSplit(A))
})
