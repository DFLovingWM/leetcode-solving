/**
 * 逆序维护有序数组，每次进行二分查找
 * O(NlogN)，耗时88ms
 * 存疑：splice操作需要移动后续元素，复杂度为O(N)，整个算法也是O(N2)？
 */
var countSmaller = function(nums) {
  const sortedArr = []
  const result = []
  for (let num of nums.reverse()) {
    const pos = bisectLeft(sortedArr, 0, sortedArr.length, num)
    result.push(pos)
    sortedArr.splice(pos, 0, num)
  }
  return result.reverse()
};

function bisectLeft (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (target <= arr[middle]) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return left
}

[
  [5,2,6,1],
  [-1, -1],
].forEach(arr => {
  console.log(countSmaller(arr))
})
