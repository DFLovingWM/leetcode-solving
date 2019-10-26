/**
 * 随机法
 * O(无穷)，可能一直死循环。耗时76ms，即实际效果还不错
 */
var majorityElement = function(nums) {
  const fails = new Set()
  while (true) { // 可能是死循环
    const element = nums[getRandom(nums.length)]
    if (fails.has(element)) {
      // 失败过的，不必继续，重新抽
      continue
    }
    if (count(nums, element) > nums.length / 2) {
      // 找到众数
      return element
    }
    fails.add(element)
  }
};

function getRandom (range) {
  return Math.floor(Math.random() * range)
}

function count (nums, target) {
  let ret = 0
  for (let i = 0; i < nums.length; ++i) {
    if (target === nums[i]) {
      ++ret
    }
  }
  return ret
}

[
  [3,2,3],
  [2,2,1,1,1,2,2],
].forEach(arr => {
  console.log(majorityElement(arr))
})
