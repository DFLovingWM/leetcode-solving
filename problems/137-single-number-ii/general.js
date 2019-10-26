/**
 * 通用解法，N >= 2，但不能应对负数
 * 参考：https://leetcode-cn.com/problems/single-number-ii/solution/tong-yong-jie-fa-gai-wen-ti-shi-shu-zu-zhong-mou-s/
 */
function singleNumberByN (nums, N) {
  let arr = Array.from({ length: 32 }, () => 0)

  for (let num of nums) {
    for (let i = 0; num; ++i) {
      if ((num & 1) === 1) {
        ++arr[i]
      }
      num = num >> 1
    }
  }

  let result = 0
  let base = 1
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % N === 1) {
      result += base
    }
    base *= 2
  }
  return result
}

function singleNumber (nums) {
  return singleNumberByN(nums, 3)
}

[
  [2,2,3,2],
  [0,1,0,1,0,1,99],
  // [-2,-2,1,1,-3,1,-3,-3,-4,-2],
].forEach(arr => {
  console.log(singleNumber(arr))
})
