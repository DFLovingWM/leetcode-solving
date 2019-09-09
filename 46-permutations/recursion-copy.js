/**
 * 递归法：递归单元访问数组的拷贝，不需要手动回溯
 * 时间：104ms
 */
var permute = function(nums) {
  const results = []
  helper(nums, [], results)
  return results
};

/**
 * 递归单元
 * @param {number[]} nums 数组
 * @param {number[][]} results 保存排列
 */
function helper (nums, result, results) {
  // 叶子结点
  if (nums.length === 0) {
    results.push(result)
    return
  }

  // 剩余数组中的每个元素都可以作为“下一个”元素加入到`result`中
  for (let i = 0; i < nums.length; ++i) {
    helper(
      [...nums.slice(0, i), ...nums.slice(i + 1)],
      [...result, nums[i]],
      results
    )
  }
}
