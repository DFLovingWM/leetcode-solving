/**
 * 二分枚举最大和（minMax）
 * 时间：O(NlogX)
 */
var splitArray = function (nums, K) {
  let max = -Infinity
  let sum = 0
  for (const n of nums) {
    max = Math.max(max, n)
    sum += n
  }

  let left = max
  let right = sum + 1

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)

    if (check(nums, mid, K)) { // 满足，就找更小的
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
};

function check (nums, maxSum, K) {
  let acc = 0
  let count = 0

  for (const n of nums) {
    if (acc + n > maxSum) {
      ++count
      acc = 0
    }
    acc += n
  }
  if (acc > 0) ++count // 如果有剩余，也当作一份

  return count <= K // 看份数是否在K之内
}

[
  [[1,2147483647],2],
  [[7,2,5,10,8], 2],
].forEach(input => {
  console.log(splitArray(...input))
})