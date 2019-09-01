/**
 * 前缀积 + 二分查找
 * [Wrong Answer]：有个很长的测试用例没有过，但是AC的算法答案也不符合。。很奇怪。这里可能是乘积太大导致的错误
 */
var numSubarrayProductLessThanK = function(nums, K) {
  let product = 1
  const prefix = [product] // 非降序数组
  let count = 0
  for (const num of nums) {
    product *= num
    const pos = bisectRight(prefix, 0, prefix.length, product / K)
    count += prefix.length - pos
    prefix.push(product)
  }
  return count
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
  [[10,5,2,6], 100],
  [[1,1,1], 1],
  [[1,2,10],10],
].forEach(input => {
  console.log(numSubarrayProductLessThanK(...input))
})

// 长例子答案是4370?