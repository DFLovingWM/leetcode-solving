/**
 * 线性遍历：
 * 因为是有序数组，只要扫描到不相等，就意味着到了下一个元素，此时就可以写到前面
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var removeDuplicates = function(nums) {
  let [L, R] = [0, 1]
  for (; R < nums.length; ++R) {
    if (nums[R] !== nums[L]) { // 新元素
      nums[++L] = nums[R]
    }
  }
  return L + 1
};
