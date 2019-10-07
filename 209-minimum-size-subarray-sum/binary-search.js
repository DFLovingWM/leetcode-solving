/**
 * 前缀和 + 二分查找：
 * 
 * 时间：O(NlogN)
 */
var minSubArrayLen = function(K, nums) {
  let prefix = [0]
  for (const num of nums) {
    prefix.push(prefix[prefix.length - 1] + num)
  }

  let minLength = Infinity
  for (let i = 1; i < prefix.length; ++i) {
    const pos = bisectRight(prefix, 0, i + 1, prefix[i] - K)
    if (pos === 0) {
      // 表示从头到这里的子数组的和都不及K，所以直接略过
      continue
    }
    const length = i - pos + 1
    minLength = Math.min(minLength, length)
  }
  return minLength === Infinity ? 0 : minLength
};

function bisectRight (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (target >= arr[middle]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  return left
}

[
  [7, [2,3,1,2,4,3]],
  [4, [1,4,4]],
  [11, [1,2,3,4,5]],
].forEach(input => {
  console.log(minSubArrayLen(...input))
})
