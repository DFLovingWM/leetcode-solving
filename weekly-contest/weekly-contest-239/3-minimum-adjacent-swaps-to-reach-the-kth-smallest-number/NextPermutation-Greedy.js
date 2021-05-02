/**
 * 贪心
 */
var getMinSwaps = function(A, k) {
  const b = Array.from(A);
  while (k--) {
    nextPermutation(b);
  }
  const a = Array.from(A);
  return calcMinSwap(a, b);
};

// 从a到b的最小交换：暴力（贪心？）
function calcMinSwap(a, b) {
  let res = 0;
  const n = a.length;
  for (let i = 0; i < n; ++i) {
    if (a[i] === b[i]) {
      continue;
    }

    let j;
    for (j = i + 1; j < n; ++j) {
      if (b[j] === a[i]) {
        break;
      }
    }

    res += j - i;
    const [tmp] = b.splice(j, 1);
    b.splice(i, 0, tmp);
  }
  return res;
}

function nextPermutation(nums) {
  // 逆序，找到第一个不满足非降序的元素
  let i;
  for (i = nums.length - 2; i >= 0; --i) {
      if (nums[i] < nums[i + 1]) {
          break;
      }
  }
  // nums[i]替换为下一个更大元素（在非降序部分中找）
  let j;
  for (j = nums.length - 1; nums[j] <= nums[i]; --j) ;
  swap(nums, i, j);
  // 将逆序部分反转
  reversePart(nums, i + 1, nums.length - 1);
}

function reversePart(arr, left, right) {
  for (; left < right; ++left, --right) {
    swap(arr, left, right);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
