/**
 * 排序 + 双指针：O(NlogN)
 */
var twoSum = function(nums, targetSum) {
  const objects = nums.map((value, index) => ({
    index: index + 1,
    value
  })).sort((a, b) => a.value - b.value)

  let [L, R] = [0, objects.length - 1];
  while (L < R) {
    const sum = objects[L].value + objects[R].value
    if (sum > targetSum) {
      --R
    } else if (sum < targetSum) {
      ++L
    } else {
      return [objects[L].index, objects[R].index]
    }
  }
  return [-1, -1]
};
