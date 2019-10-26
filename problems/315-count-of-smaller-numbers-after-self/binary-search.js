/**
 * 维护有序数组，进行二分查找
 * 
 * 时间：O(N^2)，耗时88ms
 */
var countSmaller = function(nums) {
  const sortedArr = []
  const result = []
  for (let num of nums.reverse()) {
    const pos = bisectLeft(sortedArr, 0, sortedArr.length, num)
    result.push(pos)
    sortedArr.splice(pos, 0, num) // 这一步是唯一败笔，需要O(N)，总体复杂度就上升了
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
