/**
 * 递归法：递归单元共用同一个数组，需要回溯
 * 时间：100ms
 */
var permute = function(nums) {
  const results = []
  helper(nums, 0, results)
  return results
};

/**
 * 递归单元
 * @param {number[]} nums 原数组
 * @param {number} i 从哪个下标开始
 * @param {number[][]} results 保存排列
 */
function helper (nums, i, results) {
  // 叶子结点
  if (i === nums.length) {
    results.push(nums.slice())
    return
  }

  // `i`这一位可以是剩余的任意数字
  for (let j = i; j < nums.length; ++j) {
    // 交换并继续递归
    [nums[i], nums[j]] = [nums[j], nums[i]]
    helper(nums, i + 1, results);

    // （回溯）交换回来
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
}
