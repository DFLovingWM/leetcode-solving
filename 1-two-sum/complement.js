/**
 * 找补数法，O(N)
 * 使用映射反转值与下标
 */
const twoSum = (nums, target) => {
  let complement = {}
  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i]
    debugger
    if (!complement.hasOwnProperty(target - n)) {
      complement[n] = i // value => index
    } else {
      return [complement[target - n], i]
    }
  }
}

exports.twoSum = twoSum
